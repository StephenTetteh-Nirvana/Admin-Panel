import { Card, CardContent } from "../ui/card"
import { ImageOff, Image } from "lucide-react"
import AddNewProductForm from "./AddNewProductForm"

const AddNewProduct = () => {

    return (
      <div className="w-full">
        <div className="mt-3 flex flex-col gap-2 md:flex-row md:gap-4">
            <div className="relative border-5 border-dotted border-gray-300 h-70 lg:h-[65vh] w-full
              flex items-center justify-center rounded-lg group cursor-pointer"
            >
              <div>
                <Image className="mx-auto" color="grey" size={30}/>
                <p className="text-slate-400 font-bold">Click to upload product image</p>
              </div>

              {/* Overlay box to allow image update after upload  */} 
              {/* <div 
                className="h-70 lg:h-[65vh] w-full rounded-lg 
                flex flex-col items-center justify-center rounded-lg absolute inset-0 z-50 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Image className="mx-auto" color="white"/>
                <p className="text-white font-bold">Click to update image</p>
              </div> */}
            </div>
          {/* )
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
          )} */}
        
        {/* PRODUCT DETAILS FORM  */}
        <AddNewProductForm/>
      </div>
      </div>
    )
}

export default AddNewProduct