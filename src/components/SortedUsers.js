import { useState, useEffect } from "react"
import { name, age, lastName, } from "./constants";

const SortedUsers = ({ users, setUsers, open, setOpen }) => {

   const [sortBy, setSortBy] = useState(name)

   const sortName = () => {
      const sortedName = [...users].sort((a, b) => {
         if (a['userName'].toLowerCase() < b['userName'].toLowerCase()) return -1;
      });
      setUsers(sortedName)
      setSortBy(name)
      setOpen(false)
   }

   const sortLastName = () => {
      const sortedLastName = [...users].sort((a, b) => {
         if (a['userLastName'].toLowerCase() < b['userLastName'].toLowerCase()) return -1;
      });
      setUsers(sortedLastName)
      setSortBy(lastName)
      setOpen(false)
   }

   const sortAge = () => {
      let sortedAge = [...users].sort((a, b) => a.userAge - b.userAge)
      setUsers(sortedAge)
      setSortBy(age)
      setOpen(false)

   }

   useEffect(() => {
      return () => sortLastName()
   }, [])


   return (
      <div>
         <span className="sort__title"> Sorting by: </span>
         <b className="sort__item" onClick={() => setOpen(!open)}>{sortBy}</b>
         <div>
            {open &&
               <ul className="sorted__list">
                  <li onClick={sortName}>{name}</li>
                  <li onClick={sortLastName}>{lastName}</li>
                  <li onClick={sortAge}>{age}</li>
               </ul>
            }
         </div>
      </div>
   )
}

export default SortedUsers