import { useState, useEffect } from "react"
import UsersItem from "./UsersItem"
import { useUsers } from './hooks/useUsers'
import { createUserModal, usersImage, notSearchResaltsImage, usersNotFound } from './constants'
import Modal from './Modal/Modal'
import Form from "./Modal/Form"
import UsersHeader from "./UsersHeader"
import SortedUsers from "./SortedUsers"




const UsersList = ({ header, users, changeUsers }) => {


   const [user, setUser] = useState({ userName: '', userLastName: '', userAge: '' })
   // const [userSorted, setUserSorted] = useState('')
   const [searchQuery, setSearchQuery] = useState('')
   const [modal, setModal] = useState(false)
   const sortedAndSearchedUsers = useUsers(users, users, searchQuery)
   const [open, setOpen] = useState(false)
   const [error, setError] = useState(false)
   const [counter, setCounter] = useState('');
   const [image, setImage] = useState(usersImage)






   const deleteUser = (user) => {
      changeUsers(users.filter(u => u.id !== user.id))
   }

   useEffect(() => {

      if (searchQuery.length !== 0) {
         setCounter(`results ${sortedAndSearchedUsers.length}`)

      }
      else {
         setCounter('')

      }
      setImage(usersImage)
   }, [searchQuery])


   useEffect(() => {

      if (sortedAndSearchedUsers.length === 0) {
         setImage(notSearchResaltsImage)
      }
   }, [searchQuery])



   return (
      <div onClick={() => setOpen(false)}>

         <UsersHeader header={header} />
         <button className="create__user-btn" onClick={() => setModal(true)}>Create User</button>
         <Modal visible={modal} setVisible={setModal} error={setError} >
            <Form users1={users} user={user} changeUser={setUser} changeModal={setModal}
               title={createUserModal} users={users} changeUsers={changeUsers} setUser={setUser} />
         </Modal>


         <div onClick={(e) => e.stopPropagation()} className="search-sort__wrapper">
            <div >
               <input className="user__input" type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder='Search.....'
               />
            </div>
            <SortedUsers users={users} setUsers={changeUsers} open={open} setOpen={setOpen} />

         </div>
         <span className="subtitle">{counter}</span>
         {
            sortedAndSearchedUsers.length !== 0
               ? <div > {sortedAndSearchedUsers.map((user, index) => <UsersItem user={user}
                  number={index + 1} key={user.id} remove={deleteUser} modal={modal} setModal={setModal} users={users} setUsers={changeUsers} setError={setError} error={error}
               />)}</div>
               : <h2 className="not__found">{usersNotFound}</h2>
         }
         <img className={'users__image'} src={image} alt="image" />


      </div >
   )
}

export default UsersList