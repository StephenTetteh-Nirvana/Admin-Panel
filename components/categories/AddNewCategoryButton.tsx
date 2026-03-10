'use client'

import { useMainContext } from "@/context/MainContext"
 import { Button } from "../ui/button"
 import { Plus } from "lucide-react"

const AddNewCategoryButton = () => {
    const {setShowNewCategory} = useMainContext() 

    return (
      <>
        <Button 
          className="flex items-center gap-2 cursor-pointer bg-[#2666CF] text-white hover:bg-[#2666CF]"
          onClick={()=>setShowNewCategory(true)}
        >
          <Plus color="white"/>
          Add Category
        </Button>
      </>
    )
}

export default AddNewCategoryButton;