import { createPortal } from "react-dom"
import UpdateData from "./UpdateData"

// const UpdateModal: React.FC<modal props here> = ({show, onClose})=>{
//     if(!show) return null;

//     return(
//         <>
//         {createPortal(
//             <>
//                 <div className="fixed z-30 w-full top-0 bg-black opacity-70" onClick={onClose}></div>
//                 <div className="fixed z-40 p-10 bg-white text-black rounded-md">
//                     <PostData />
//                 </div>
//             </>, document.body
//         )}
//         </>
//     )
// }
// export default UpdateModal