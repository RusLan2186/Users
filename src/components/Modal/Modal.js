import cl from './Modal.module.css'

const ModalUser = ({ children, visible, setVisible, error }) => {
   const rootclasses = [cl.myModal]
   if (visible) {
      rootclasses.push(cl.active)
   }

   const rootclassesContent = [cl.myModalContent]
   if (visible) {
      rootclassesContent.push(cl.active)
   }





   return (
      <div onClick={() => error(false)} >
         <div className={rootclasses.join(' ')} onClick={() => setVisible(false)}>

            <div className={rootclassesContent.join(' ')} onClick={(e) => e.stopPropagation()}>
               <div onClick={() => setVisible(false)} className={cl.close}>X</div>
               {children}
            </div>
         </div>
      </div>
   )
}

export default ModalUser


