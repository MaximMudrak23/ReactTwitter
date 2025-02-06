import './styles.css'
import React, { useEffect, useState } from 'react';
import { ProfilePageLeftAside } from '../ProfilePageLeftAside';
import { ProfilePageMain } from '../ProfilePageMain';
import { ProfilePageRightAside } from '../ProfilePageRightAside';

export function ProfilePageContainer() {
  // Monitor Width
  const [monitorWidth, setMonitorWidth] = useState(screen.width);
  useEffect(() => {
    setMonitorWidth(screen.width);
  }, []);

  return (
    <div className="profilePageContainer" style={{ maxWidth: `${monitorWidth}px` }}>
      <ProfilePageLeftAside />
      <ProfilePageMain />
      <ProfilePageRightAside />
    </div>
  )
}