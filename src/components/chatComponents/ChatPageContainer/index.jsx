import { useEffect, useState } from 'react';
import { ProfilePageLeftAside } from '../../profileComponents/ProfilePageLeftAside';
import { ProfilePageRightAside } from '../../profileComponents/ProfilePageRightAside';
import { ChatPageMain } from '../ChatPageMain';

export function ChatPageContainer() {
    // Monitor Width
    const [monitorWidth, setMonitorWidth] = useState(screen.width);
    useEffect(() => {
    setMonitorWidth(screen.width);
    }, []);

  return (
    <div className="profilePageContainer" style={{ maxWidth: `${monitorWidth}px` }}>
      <ProfilePageLeftAside />
      <ChatPageMain />
      <ProfilePageRightAside />
    </div>
  )
}