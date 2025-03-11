import { FindFolder } from '../../profileComponents/FindFolder';
import { ProfilePageHeader } from '../../profileComponents/ProfilePageHeader'
import { EditProfilePageButtons } from '../EditProfilePageButtons';
import { EditProfilePageInput } from '../EditProfilePageInput';
import { EditProfilePageAvatar } from '../EditProfilePageAvatar';
import { loadUserData } from '../../../../API/GET/loadUserData';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export function EditProfilePageMain() {
    const {userInfo, isOwner, setUser} = loadUserData();
    const navigate = useNavigate();
    const [userFullName, setUserFullName] = useState('');

    useEffect(() => {
        if (userInfo) {
            setUserFullName(userInfo.fullname);
        }
    }, [userInfo]);

    useEffect(() => {
        if (userInfo && !isOwner) {
            navigate(`/profile/${localStorage.getItem('username')}`);
        }
    }, [userInfo, isOwner, navigate]);
    
    if(!userInfo) return null;
    
    return (
    <main className='profileMain'>
        <FindFolder />
        <ProfilePageHeader userInfo={userInfo} />
        <EditProfilePageAvatar userInfo={userInfo} />
        <EditProfilePageInput userFullName={userFullName} setUserFullName={setUserFullName} />
        <EditProfilePageButtons userInfo={userInfo} setUser={setUser} userFullName={userFullName} />
    </main>
    )
}