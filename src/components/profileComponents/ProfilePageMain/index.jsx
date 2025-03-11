import './styles.css'
import { FindFolder } from '../FindFolder';
import { ProfilePageHeader } from '../ProfilePageHeader';
import { ProfilePageInfo } from '../profilePageInfo';
import { CategoryAndAddPost } from '../CategoryAndAddPost';
import { loadUserData } from '../../../../API/GET/loadUserData';

export function ProfilePageMain() {
    const {userInfo, isOwner, setUser} = loadUserData();
    if(!userInfo) return null;

    return (
        <main className='profileMain'>
            <FindFolder />
            <ProfilePageHeader userInfo={userInfo} />
            <ProfilePageInfo userInfo={userInfo} isOwner={isOwner} setUser={setUser} />
            <CategoryAndAddPost userInfo={userInfo} isOwner={isOwner} setUser={setUser} />
        </main>
    )
}