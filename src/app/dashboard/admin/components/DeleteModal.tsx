import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

const DeleteModal: React.FC<any> = ({show, data, onClose}) => {
    if(!show) return null;

    const router = useRouter()
    const okRefElement = useRef<HTMLDivElement>(null)
    const [isShown, setIsShown] = useState<boolean>(true)

    const isDeleted = ()=>{
        setIsShown(false)
        setTimeout(()=>{
            router.refresh()
        }, 1500)
    }
    // const handleSubmit = async()=>{
    //     try{
    //         const res = await fetch(`api url her`, {
    //             method: "DELETE"
    //         })
    //         const result = await res.json()
    //         if(res.ok){
    //             console.log("Delete success", result)
    //             isDeleted(example: data.title)
    //         }else{
    //             console.log("Delete failed", result.message)
    //         }
    //     }catch(error){
    //         console.error(error)
    //     }
    // }

    return(
        <>
            delete modal here
        </>
    )
}
export default DeleteModal