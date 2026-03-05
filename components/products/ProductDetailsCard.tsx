'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useMainContext } from "@/context/MainContext"
import { X } from "lucide-react"
import { Badge } from "../ui/badge"

const ProductDetailsCard = () => {
  const {setViewProductDetails, product} = useMainContext()

  return (
    <Card 
      className="mx-auto w-full max-w-sm z-99"
    >
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-xl">{product?.title ?? "Product Name"}</CardTitle>
        <Button 
          onClick={()=>setViewProductDetails(false)}
          className="cursor-pointer"
        >
          <X size={18}/>
        </Button>
      </CardHeader>
      <div className="rounded-lg w-[95%] mx-auto h-40">
        <img 
          src={product?.image}
          alt="productImg"
          className="w-full h-full object-contain"
        />
      </div>
      <CardDescription className="px-3 font-bold">
        <h2 className="text-black font-bold">Description</h2>
        {product?.description ?? "No description yet"}

        <div className="mt-2 flex items-center justify-between">
          <div>
            <h1 className="text-black font-bold">Price</h1>
            <p>${product?.price ?? "0.00"}</p>
          </div>
          <div>
            <h1 className="text-black font-bold">Pieces Left</h1>
            <p>{product?.stock ?? "NaN"}</p>

            {/* a badge to display stock level  */}
            <Badge className={`${product && product?.stock === 0 ? "bg-red-500 text-white" 
              : product && product?.stock < 10 ? "bg-yellow-500" 
              : product && product?.stock > 10 ? "bg-green-500" : ""}`
            }
            >
              {product ? 
                (
                  product.stock === 0 ? 
                  "Out Of Stock"
                  : 
                  product.stock < 10 ?
                  "Low Stock"
                  : 
                  "Active" 
                )
                : (
                ""
              )}
            </Badge>
          </div>
        </div>
      </CardDescription>

    </Card>
  )
}

export default ProductDetailsCard
