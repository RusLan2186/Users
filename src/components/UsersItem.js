import { useState } from "react"

import Modal from './Modal/Modal'
import { deleteButton, changeButton, editUserModal } from './constants'
import EditForm from "./EditForm"


const UsersItem = ({ user, number, remove, users, setUsers, setError }) => {

   const [openModal, setOpenModal] = useState(false)



   return (
      <div >
         <div className="users__item-wrapper">
            <div className="users__info">
               <mark className="users__number">  {number}.</mark>
               <span className="users__name"> Name: <b>{user.userName}</b></span>
               <span className="users__name"> Last Name: <b>{user.userLastName}</b></span>
               <span> Age: <b>{user.userAge}</b></span>
            </div>

            <div className="users__buttons">
               <img className="change__image" src={deleteButton} onClick={() => remove(user)} />
               <img className="change__image" src={changeButton} onClick={() => setOpenModal(true)} />
            </div>
         </div>
         <Modal visible={openModal} setVisible={setOpenModal} error={setError}>

            <EditForm user={user} users={users} changeUsers={setUsers} changeOpenModal={setOpenModal} />
            <div></div>
         </Modal>



      </div>



   )
}


export default UsersItem