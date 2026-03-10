'use client'
import { Button } from "../ui/button"
import { Trash, Pen } from "lucide-react"
import { useMainContext } from "@/context/MainContext"

const CategoryTableActions = () => {
    const {setShowCategoryDeleteCard,setShowEditCategoryCard} = useMainContext()

    return (
      <>
        <Button variant="ghost" 
          className="cursor-pointer"
          onClick={()=>setShowEditCategoryCard(true)}
        >
          <Pen size={15}/>
        </Button>
        <Button 
          variant="ghost" 
          className="cursor-pointer"
          onClick={()=>setShowCategoryDeleteCard(true)}
        >
          <Trash size={15} color="red"/>
        </Button>
      </>
    )
}

export default CategoryTableActions