import React from 'react'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    // add form here fx: title: yup.string().required("Title is required"), osv...
})

const PostData = () => {
  
  const router = useRouter();
  const okRefElement = useRef<HTMLDivElement>(null);
//   const { register, handleSubmit, setValue, reset, formState: {errors}, } = useForm<"Insert type interface for the form here">({resolver: yupResolver(schema),})

    const isPosted = (feedback: boolean) => {
        if(okRefElement.current){
            okRefElement.current.textContent = feedback
            ? "Your data has been saved"
            : "There was an issue";
        }
        setTimeout(()=>{
            router.refresh()
        }, 1500)
    }

    // const onSubmit = async(data: insert type interface for the form here)=>{
    //     try{
    //         const formData = new FormData();

    //         // skriv vilke form elementer der skal tilføjes fx: formData.append("title", data.title); osv...
    //         // og hvis det er en fil så skriv: 
    //         // if(data.image?[0]){
    //         //    formData.append("image", data.image[0])  
    //         // }

    //         const res = await fetch(`Api url her`, {
    //             cache: "no-store",
    //             method: "POST",
    //             body: formData,
    //         })

    //         if(res.ok){
    //             isPosted(true);
    //             reset()
    //         }else{
    //             isPosted(false)
    //         }
    //     }catch(error){
    //          console.error(error)
    //     }
    // }
  
    return (
    <>
        lav din form til at post her
        {/* til når du skal få dataen fra input feltet til at kunne poste skriv: <input {...register("title") /> */}
    </>
  )
}

export default PostData
