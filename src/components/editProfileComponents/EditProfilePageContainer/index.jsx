import { useEffect, useState } from 'react';
import { ProfilePageLeftAside } from '../../profileComponents/ProfilePageLeftAside';
import { EditProfilePageMain } from '../EditProfilePageMain';
import { ProfilePageRightAside } from '../../profileComponents/ProfilePageRightAside';

export function EditProfilePageContainer() {
  // Monitor Width
  const [monitorWidth, setMonitorWidth] = useState(screen.width);
  useEffect(() => {
    setMonitorWidth(screen.width);
  }, []);

  return (
    <div className="profilePageContainer" style={{ maxWidth: `${monitorWidth}px` }}>
      <ProfilePageLeftAside />
      <EditProfilePageMain />
      <ProfilePageRightAside />
    </div>
  )
}