import './styles.css'
import { FindFolder } from '../FindFolder';
import { ProfilePageHeader } from '../ProfilePageHeader';
import { ProfilePageInfo } from '../profilePageInfo';
import { CategoryFolder } from '../CategoryFolder';
import { AddPostFolder } from '../AddPostFolder';

export function ProfilePageMain() {
    return (
        <main className='profileMain'>
            <FindFolder />
            <ProfilePageHeader />
            <ProfilePageInfo />
            <CategoryFolder />
            <AddPostFolder />
        </main>
    )
}