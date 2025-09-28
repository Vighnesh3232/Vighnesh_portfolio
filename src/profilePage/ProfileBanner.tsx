// src/profilePage/ProfileBanner.tsx
import React, { useEffect, useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { getProfileBanner } from '../queries/getProfileBanner';
import { ProfileBanner as ProfileBannerType } from '../types';

const ProfileBanner: React.FC = () => {
  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getProfileBanner();
      setBannerData(data);
    })();
  }, []);

  if (!bannerData) return <div>Loading...</div>;

  // inside ProfileBanner.tsx *after* you computed bannerData
const resumeHref = bannerData.resumeLink?.url?.startsWith('http')
  ? bannerData.resumeLink.url
  : `${process.env.PUBLIC_URL}/${bannerData.resumeLink.url}`;

// replace PlayButton with a real link (keeps your look with a small class)
<div className="banner-buttons" onClick={(e) => e.stopPropagation()}>
  <a
    href={resumeHref}
    target="_blank"
    rel="noopener noreferrer"
    className="resume-btn"
  >
    Resume
  </a>
  <MoreInfoButton onClick={() => {
    const href = bannerData.linkedinLink.startsWith('http')
      ? bannerData.linkedinLink
      : `${process.env.PUBLIC_URL}/${bannerData.linkedinLink}`;
    window.open(href, '_blank', 'noopener,noreferrer');
  }} label="LinkedIn" />
</div>


  // Build a href that works locally AND on GitHub Pages
  const buildHref = (url: string) =>
    url.startsWith('http') ? url : `${process.env.PUBLIC_URL}/${url}`;

  const handlePlayClick = () => {
    const href = buildHref(bannerData.resumeLink.url);
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  const handleLinkedinClick = () => {
    const href = buildHref(bannerData.linkedinLink);
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">{bannerData.headline}</h1>
        <p className="banner-description">{bannerData.profileSummary}</p>

        {/* Stop click bubbling so only the buttons handle clicks */}
        <div className="banner-buttons" onClick={(e) => e.stopPropagation()}>
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
