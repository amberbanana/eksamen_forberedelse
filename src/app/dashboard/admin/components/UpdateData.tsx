"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    // add form here fx: title: yup.string().required("Title is required"), osv...
})
 
const UpdateData = () => {
  
    const router = useRouter();
    //  const { register, handleSubmit, setValue, reset, formState: {errors}, } = useForm<"Insert type interface for the form here">({resolver: yupResolver(schema),})

    return (
    <div>
      
    </div>
  )
}

export default UpdateData
