"use client";
import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

export type Audience = 'default' | 'government' | 'investor' | 'technologist';

interface AudienceContextType {
  audience: Audience;
  setAudience: Dispatch<SetStateAction<Audience>>;
}

const AudienceContext = createContext<AudienceContextType | undefined>(undefined);

export const AudienceProvider = ({ children }: { children: React.ReactNode }) => {
  const [audience, setAudience] = useState<Audience>('default');

  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
};

export const useAudience = () => {
  const context = useContext(AudienceContext);
  if (context === undefined) {
    throw new Error('useAudience must be used within an AudienceProvider');
  }
  return context;
};
