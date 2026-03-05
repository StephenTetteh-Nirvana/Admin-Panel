'use client'

import { Eye } from "lucide-react"
 import { Button } from "@/components/ui/button"
import { useMainContext } from "@/context/MainContext"
import { Product } from "@/types/types"

interface ViewDetailsButtonProps {
  product: Product
}

const ViewDetailsButton = ({product}: ViewDetailsButtonProps) => {
    const {setViewProductDetails, setProduct} = useMainContext()

    return (
        <>
        {/* BUTTON FOR DESKTOPS  */}
        <Button className="lg:visible w-[84%] absolute bottom-2 group" 
          variant="outline"
          onClick={()=> {
            setViewProductDetails(true)
            setProduct(product)
          }}
        >
          {/* This span will be used for animation when hovering on the button  */}
          <span className="transition-[width] ease-in-out bg-black/80 w-0 z-50 
            absolute left-0 h-full rounded-md group-hover:w-full cursor-pointer"></span>
          <span className="group-hover:z-99 flex items-center gap-1 group-hover:text-white transition-colors ease-in-out cursor-pointer">
            View Details
            <Eye/>
          </span>  
        </Button>

        {/* BUTTON FOR MOBILE AND TABLETS  */}
        <Button 
          className="lg:hidden w-[84%] absolute bottom-2" 
          onClick={()=> {
            setViewProductDetails(true)
            setProduct(product)
          }}
        >
          View Details
          <span>
            <Eye/>
          </span>
        </Button>
        </>
    )
}

export default ViewDetailsButton