
import { useState, useEffect } from "react"
import { editUserModal, errorUserAge, errorUserName, errorUserLastName } from './constants'

const EditForm = ({ user, users, changeUsers, changeOpenModal }) => {


   const [valueName, setValueName] = useState(user.userName)
   const [valueAge, setValueAge] = useState(user.userAge)
   const [valueLastName, setValueLastName] = useState(user.userLastName)

   const [userNameDirty, setUserNameDirty] = useState(false)
   const [userLastNameDirty, setUserLastNameDirty] = useState(false)
   const [userAgeDirty, setUserAgeDirty] = useState(false)

   const [userNameError, setUserNameError] = useState(errorUserName)
   const [userLastNameError, setUserLastNameError] = useState(errorUserLastName)
   const [userAgeError, setUserAgeError] = useState(errorUserAge)

   const [buttonValid, setButtonValid] = useState(false)





   useEffect(() => {
      if (valueName.length === 0 || valueLastName.length === 0 || valueAge.length === 0) {
         setButtonValid(false)

      } else {
         setButtonValid(true)

      }
   }, [valueName, valueAge, valueLastName])





   const savePost = (id) => {

      let newUser = [...users].map(item => {
         if (item.id === id && valueName !== '' && valueLastName !== '' && valueAge !== '') {
            item.userName = valueName;
            item.userAge = valueAge;
            item.userLastName = valueLastName;
         }
         return item
      })
      changeUsers(newUser)
      changeOpenModal(false)

   }


   // blur срабатывает когда пользователь убрал курсор из инпута
   const blurHandler = (e) => {
      switch (e.target.name) {
         case 'userName':
            setUserNameDirty(true)
            break
         case 'userLastName':
            setUserLastNameDirty(true)
            break
         case 'userAge':
            setUserAgeDirty(true)
            break
      }
   }

   const editNameHundler = (e) => {
      setValueName(e.target.value)
      if (!e.target.value) {
         setUserNameError(errorUserName)
      } else {
         setUserNameError('')
      }
   }

   const editLastNameHundler = (e) => {
      setValueLastName(e.target.value)
      if (!e.target.value) {
         setUserLastNameError(errorUserLastName)
      } else {
         setUserLastNameError('')
      }
   }

   const editAgeHundler = (e) => {
      setValueAge(e.target.value)
      if (!e.target.value) {
         setUserAgeError(errorUserAge)
      } else {
         setUserAgeError('')
      }
   }




   return (
      <div className="users__form">
         <h1 className="users__modal_title">{editUserModal}</h1>
         {(userNameDirty && userNameError) && <div className='error'>{userNameError}</div>}
         <input className={(userNameDirty && userNameError) && userNameError ? 'user__input-error' : 'user__input'}
            onBlur={e => blurHandler(e)}
            value={valueName}
            onChange={(e) => editNameHundler(e)}
            placeholder="Enter name"
            name='userName'
         />
         {(userLastNameDirty && userLastNameError) && <div className='error'>{userLastNameError}</div>}
         <input className={(userLastNameDirty && userLastNameError) && userLastNameError ? 'user__input-error' : 'user__input'}
            onBlur={e => blurHandler(e)}
            value={valueLastName}
            onChange={(e) => editLastNameHundler(e)}
            placeholder="Enter last name"
            name='userLastName'
         />
         {(userAgeDirty && userAgeError) && <div className='error'>{userAgeError}</div>}
         <input className={(userAgeDirty && userAgeError) && userAgeError ? 'user__input-error' : 'user__input'}
            onBlur={e => blurHandler(e)}
            value={valueAge}
            onChange={(e) => editAgeHundler(e)}
            placeholder="Enter age"
            name='userAge'
         />

         <button disabled={!buttonValid} className={!buttonValid ? 'no__active' : "user__button"}
            onClick={() => savePost(user.id)} >Save</button>

      </div>
   )
}

export default EditForm