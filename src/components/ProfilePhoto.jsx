import { useState } from 'react';
import { profile } from '../data.js';

export default function ProfilePhoto({ className = '' }) {
  const [failed, setFailed] = useState(false);
  if (failed || !profile.photo) {
    return (
      <div className={`photo-fallback ${className}`} aria-label={profile.name}>
        {profile.initials}
      </div>
    );
  }
  return (
    <img
      src={profile.photo}
      alt={profile.name}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}