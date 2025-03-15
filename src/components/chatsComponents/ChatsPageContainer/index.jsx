import { useEffect, useState } from 'react';
import { ProfilePageLeftAside } from '../../profileComponents/ProfilePageLeftAside';
import { ProfilePageRightAside } from '../../profileComponents/ProfilePageRightAside';
import { ChatsPageMain } from '../ChatsPageMain';

export function ChatsPageContainer() {
    // Monitor Width
    const [monitorWidth, setMonitorWidth] = useState(screen.width);
    useEffect(() => {
    setMonitorWidth(screen.width);
    }, []);

  return (
    <div className="profilePageContainer" style={{ maxWidth: `${monitorWidth}px` }}>
      <ProfilePageLeftAside />
      <ChatsPageMain />
      <ProfilePageRightAside />
    </div>
  )
}