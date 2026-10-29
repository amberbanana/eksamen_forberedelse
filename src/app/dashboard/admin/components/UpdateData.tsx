"use client"

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    // add form here fx: title: yup.string().required("Title is required"), osv...
})
 
const UpdateData = ({id}) => {
  
    const router = useRouter();
    const okRefElement = useRef<HTMLDivElement>(null);
    //  const { register, handleSubmit, setValue, reset, formState: {errors}, } = useForm<"Insert type interface for the form here">({resolver: yupResolver(schema),})

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

    // useEffect(()=>{

    //   try{
    //     const editableData = await editalbleData(id)
    //     if(!editableData) return;
    //     // example for how to get the data to be in the form so you can edit it
    //     // setValue("title", editableData.title ?? "")
    //   }catch(error){
    //     console.error(error)
    //   }
    // },[id, setValue])

    // const onSubmit = async(data: insert type interface for the form here)=>{
    //     try{
    //         const formData = new FormData();

    //         // skriv vilke form elementer der skal tilføjes fx: 
    //         formData.append("title", data.title);
    //         // og hvis det er en fil så skriv: 
    //         // if(data.image?[0]){
    //         //    formData.append("image", data.image[0])  
    //         // }

    //         const res = await fetch(`Api url her med id`, {
    //             method: "PUT",
    //             body: formData,
    //         })
    //         if(res.ok){
    //            isPosted(true)         
    //         }else{
    //            isPosted(false)  
    //         }
    //     }catch(error){
    //          console.error(error)
    //     }
    // }

    return (
    <div>
      put form here 
      {/* til når du skal få dataen fra input feltet til at kunne poste skriv: <input {...register("title") /> */}
    </div>
  )
}

export default UpdateData
