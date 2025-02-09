import './styles.css'
import { FindFolder } from '../FindFolder';
import { ProfilePageHeader } from '../ProfilePageHeader';
import { ProfilePageInfo } from '../profilePageInfo';
import { CategoryAndAddPost } from '../CategoryAndAddPost';

export function ProfilePageMain() {
    return (
        <main className='profileMain'>
            <FindFolder />
            <ProfilePageHeader />
            <ProfilePageInfo />
            <CategoryAndAddPost />
        </main>
    )
}