
import { usersImageTwo, usersImageThree } from './constants'

const UsersHeader = ({ header }) => {
   return (
      <div className="users__header">
         <img className="users__image-two" src={usersImageTwo} alt="users" />
         <h1 className="title">  {header}</h1>
         <img className="users__image-two" src={usersImageThree} alt="users" />
      </div>
   )
}

export default UsersHeader