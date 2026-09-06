import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import { PROFILES } from '../data/profiles';
import { useProfile } from '../context/ProfileContext';
import './browse.css';

const Browse: React.FC = () => {
  const navigate = useNavigate();
  const { setProfileName } = useProfile();

  const handleProfileClick = (profileName: typeof PROFILES[number]['name']) => {
    setProfileName(profileName);
    navigate(`/profile/${profileName}`);
  };

  return (
    <div className="browse-container">
      <p className='who-is-watching'>Who's Watching?</p>
      <div className="profiles">
        {PROFILES.map((profile) => (
          <ProfileCard
            key={profile.name}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
