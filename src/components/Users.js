
import { useState } from "react"
import UsersList from "./UsersList"




const Users = () => {
   const [users, setUsers] = useState([
      { id: 1, userName: 'Karina', userLastName: 'Anders', userAge: '37' },
      { id: 3, userName: 'Anna', userLastName: 'Zenders', userAge: '27' },
      { id: 2, userName: 'zarina', userLastName: 'bander', userAge: '18' },
   ])
   return (
      <div>
         <UsersList header={'users'} users={users} changeUsers={setUsers} />
      </div>
   )
}


export default Users