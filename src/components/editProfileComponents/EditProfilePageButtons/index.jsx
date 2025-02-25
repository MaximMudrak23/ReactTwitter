import './styles.css'
import { useRef } from 'react'
import { RoundButton } from '../../RoundButton'
import { saveFullName } from '../../../../API/saveFullName'
import { handleAvatarUpload, handleBackgroundUpload } from '../../../../API/FrontBusinessLogic/handleUploads'
import { handleAvatarDelete, handleBackgroundDelete } from '../../../../API/FrontBusinessLogic/handleDeletes'

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
            onChange={(e)=>handleAvatarUpload(e, userInfo, setUser)}
        />
        <input
            type="file"
            accept='image/png, image/jpg, image/jpeg, video/mp4, video/wav'
            style={{display: 'none'}}
            ref={backgroundInput}
            onChange={(e)=>handleBackgroundUpload(e, userInfo, setUser)}
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
                onClick={()=>handleBackgroundDelete(userInfo,setUser)}
            />
            <RoundButton
                wdth='150px'
                txt={'Удалить фото'}
                bgc={'white'}
                txtc={'black'}
                isBold
                onClick={()=>handleAvatarDelete(userInfo,setUser)}
            />
        </div>
    </>
    )
}