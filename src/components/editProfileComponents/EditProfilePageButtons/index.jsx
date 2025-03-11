import './styles.css';
import { useRef } from 'react';
import { RoundButton } from '../../RoundButton';
import { saveFullName } from '../../../../API/PATCH/saveFullName';
import { changeAvatar } from '../../../../API/POST/changeAvatar';
import { changeBackground } from '../../../../API/POST/changeBackground';
import { deleteAvatar } from '../../../../API/DELETE/deleteAvatar';
import { deleteBackground } from '../../../../API/DELETE/deleteBackground';

export function EditProfilePageButtons({userInfo, setUser, userFullName}) {
    const avatarInput = useRef(null);
    const backgroundInput = useRef(null);

    return (
    <>
        <input
            type="file"
            accept='image/png, image/jpg, image/jpeg'
            style={{display: 'none'}}
            ref={avatarInput}
            onChange={(e)=>changeAvatar(e, userInfo, setUser)}
        />
        <input
            type="file"
            accept='image/png, image/jpg, image/jpeg, video/mp4, video/wav'
            style={{display: 'none'}}
            ref={backgroundInput}
            onChange={(e)=>changeBackground(e, userInfo, setUser)}
        />
        <div className="profileMain__edit__buttons">
            <RoundButton
                wdth='150px'
                txt={'Загрузить фон'}
                bgc={'white'}
                txtc={'black'}
                isBold
                onClick={()=>backgroundInput.current.click()}
            />
            <RoundButton
                wdth='150px'
                txt={'Загрузить фото'}
                bgc={'white'}
                txtc={'black'}
                isBold
                onClick={()=>avatarInput.current.click()}
            />
            <RoundButton
                wdth='150px'
                txt={'Применить имя'}
                bgc={'white'}
                txtc={'black'}
                isBold
                onClick={()=>saveFullName(userInfo,userFullName,setUser)}
            />
        </div>
        <div className="profileMain__edit__buttons delete">
            <RoundButton
                wdth='150px'
                txt={'Удалить фон'}
                bgc={'white'}
                txtc={'black'}
                isBold
                onClick={()=>deleteBackground(userInfo,setUser)}
            />
            <RoundButton
                wdth='150px'
                txt={'Удалить фото'}
                bgc={'white'}
                txtc={'black'}
                isBold
                onClick={()=>deleteAvatar(userInfo,setUser)}
            />
        </div>
    </>
    )
}