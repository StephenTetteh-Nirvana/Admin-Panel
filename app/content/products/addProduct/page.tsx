import AddNewProduct from "@/components/products/AddNewProduct"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const page = () => {
    return (
      <div>
        {/* HEADER SECTION  */}
        <div className="gap-2">
          <div className="flex items-center gap-4">
            <Link href="/content/products">
              <Button className="flex items-center gap-1 cursor-pointer">
                <ArrowLeft />
                <h1 className="font-bold">Back to products</h1>
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Add New Product</h1>
          </div>
          <p className="text-slate-400">Add new product. Make sure to save changes before exiting.</p>
        </div>

        <AddNewProduct/>
      </div>
    )
}

export default page