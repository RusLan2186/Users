import { useMemo } from "react";

// export const useSortedUsers = (users, sort) => {
//    const sortedUsers = useMemo(() => {
//       if (sort) {
//          return [...users].sort((a, b) => a[sort].localeCompare(b[sort]))
//       }
//       return users;
//    }, [sort, users])

//    return sortedUsers
// }


export const useUsers = (users, sort, query) => {
   // const sortedUsers = useSortedUsers(users, sort)

   const sortedAndSearchedUsers = useMemo(() => {
      // return sortedUsers.filter(user => user.userName.toLowerCase().includes(query.toLowerCase())
      return users.filter(user => user.userName.toLowerCase().includes(query.toLowerCase())
         || user.userAge.toLowerCase().includes(query.toLowerCase())
         || user.userLastName.toLowerCase().includes(query.toLowerCase()))
      // }, [query, sortedUsers])
   }, [query, users])

   return sortedAndSearchedUsers
}