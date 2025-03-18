import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FindFolder } from '../../profileComponents/FindFolder';
import { ChatsContainer } from '../ChatsContainer';
import { fetchUserData } from '../../../../API/GET/fetchUserData';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export function ChatsPageMain() {
  const { username } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchUserData(username);
      if (!data) return navigate('/register');
      setUserInfo(data);
      if (localStorage.getItem('username') !== username) {
        navigate(`/profile/${localStorage.getItem('username')}`);
      }
    };
    loadData();
    const interval = setInterval(loadData, 3000);
    return () => clearInterval(interval);
  }, [username, navigate]);
  if(!userInfo) return null;

  return (
    <main className='profileMain'>
      <FindFolder />
      <ChatsContainer userInfo={userInfo} />
    </main>
  )
}