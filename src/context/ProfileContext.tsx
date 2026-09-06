import React, { createContext, useContext, useState, useCallback } from 'react';
import { PROFILES, ProfileConfig, ProfileName } from '../data/profiles';

const STORAGE_KEY = 'currentProfileName';

interface ProfileContextValue {
  profile: ProfileConfig | null;
  setProfileName: (name: ProfileName) => void;
}

const ProfileContext = createContext<ProfileContextValue>({
  profile: null,
  setProfileName: () => {},
});

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileConfig | null>(() => {
    const storedName = localStorage.getItem(STORAGE_KEY);
    return PROFILES.find((p) => p.name === storedName) || null;
  });

  const setProfileName = useCallback((name: ProfileName) => {
    const match = PROFILES.find((p) => p.name === name);
    if (!match) return;
    setProfile(match);
    localStorage.setItem(STORAGE_KEY, name);
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfileName }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
