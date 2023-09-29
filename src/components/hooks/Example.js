import { useState } from "react"

import cl from './Example.module.css'
import { notSearchResaltsImage } from '../constants'

const Example = () => {



   const [colorClass, setColorClass] = useState(cl.item__one)
   const [color, setColor] = useState(false)

   const [addClassList, setAddClassList] = useState(cl.list)



   const addClass = (e) => {

      if (addClassList) {
         setAddClassList(cl.active)
      } if (addClassList === cl.active) {
         setAddClassList(cl.list)
      }

   }

   const changeColor = () => {
      if (colorClass === cl.item__one) {
         setColorClass(cl.item__two)
      }
      if (colorClass === cl.item__two) {
         setColorClass(cl.item__three)
      }
      if (colorClass === cl.item__three) {
         setColorClass(cl.item__one)
      }
      setColor((prev) => !prev)
   }
   return (
      <div>

         <nav>
            <p className={addClassList === cl.list ? cl.title : cl.red} onClick={addClass}> Menu</p>


            <ul className={addClassList} >
               <a href="#">  <li className={cl.item}>item1</li></a>
               <a href="#">  <li className={cl.item}>item2</li></a>
               <a href="#">  <li className={cl.item}>item3</li></a>
            </ul>

         </nav>
         <div>
            {addClassList === cl.active && <img src={notSearchResaltsImage} />}
            {addClassList === cl.list && <div className={colorClass} style={{ width: '100px', height: '100px', border: '2px solid black', zIndex: '1000' }}></div>}
         </div>



         {/* <div className={colorClass} style={{ width: '100px', height: '100px', border: '2px solid black', zIndex: '1000' }}></div> */}
         <button style={{ margin: '20px 0' }} onClick={changeColor}>CHANGE</button>

         <div>
            {colorClass === cl.item__one && <div>Item One</div>}
            {colorClass === cl.item__two && <div>Item Two</div>}
            {colorClass === cl.item__three && <div>Item Three</div>}
         </div>
         <div>
            {color ? <div>Ruslan</div> : <div>Pasha</div>}
         </div>
      </div>
   )
}

export default Example