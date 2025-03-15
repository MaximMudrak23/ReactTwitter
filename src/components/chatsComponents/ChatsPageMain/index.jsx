import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FindFolder } from '../../profileComponents/FindFolder';
import { ChatsContainer } from '../ChatsContainer';
import { loadUserData } from '../../../../API/GET/loadUserData';

export function ChatsPageMain() {
  const {userInfo, isOwner} = loadUserData();
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo && !isOwner) {
      navigate(`/profile/${localStorage.getItem('username')}`);
    }
  }, [userInfo, isOwner, navigate]);
  if(!userInfo) return null;

  return (
    <main className='profileMain'>
      <FindFolder />
      <ChatsContainer userInfo={userInfo} />
    </main>
  )
}