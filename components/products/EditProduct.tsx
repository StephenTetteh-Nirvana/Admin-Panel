'use client'

import {dummyProducts} from "@/dummyProducts"
import { useParams } from "next/navigation"
import { Card, CardContent } from "../ui/card"
import { ImageOff, Image } from "lucide-react"
import EditProductForm from "./EditProductForm"

const EditProduct = () => {
    const { id } = useParams()
    const foundProduct = dummyProducts.find((p)=> p.id === Number(id))
    console.log("foundProduct:", foundProduct)

    return (
      <div className="w-full">
        <div className="mt-3 flex flex-col gap-2 md:flex-row md:gap-4">
          {foundProduct?.image ? (
            <div className="relative bg-slate-200 h-70 lg:h-[65vh] w-full
              flex items-center justify-center rounded-lg group cursor-pointer"
            >
              <img
                src={foundProduct?.image}
                alt={foundProduct?.title || "Product Image"}
                className="w-full rounded-lg w-full h-62 md:h-full object-contain z-50"
              />

              {/* Overlay box when Card is hovered  */} 
              <div 
                className="h-70 lg:h-[65vh] w-full rounded-lg 
                flex flex-col items-center justify-center rounded-lg absolute inset-0 z-50 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Image className="mx-auto" color="white"/>
                <p className="text-white font-bold">Click to update image</p>
              </div>
            </div>
          )
          : 
          (
            <Card className="bg-slate-200 h-70 w-full rounded-lg flex items-center justify-center">
                <CardContent>
                <div className="flex flex-col gap-1">
                    <ImageOff className="mx-auto" color="grey" />
                    <p className="text-slate-500 font-bold">No image preview available</p>
                </div>
                </CardContent>
            </Card>
          )}
        
        {/* PRODUCT DETAILS FORM  */}
        <EditProductForm product={foundProduct}/>
      </div>
      </div>
    )
}

export default EditProduct