import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
import { getProfileConfig } from '../data/profiles';
import { useProfile } from '../context/ProfileContext';

const DEFAULT_BACKGROUND_GIF = "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif";

const ProfilePage: React.FC = () => {
  const { profileName } = useParams<{ profileName: string }>();
  const { setProfileName } = useProfile();

  const config = getProfileConfig(profileName);
  const profile = config?.name || 'recruiter';
  const backgroundGif = config?.backgroundGif || DEFAULT_BACKGROUND_GIF;

  useEffect(() => {
    if (config) setProfileName(config.name);
  }, [config, setProfileName]);

  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner
        />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
