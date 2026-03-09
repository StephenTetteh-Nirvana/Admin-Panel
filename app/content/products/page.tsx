import {dummyProducts} from "@/dummyProducts"
import type { Product } from "@/types/types"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import ProductCard from "@/components/products/ProductCard"
import ProductActionPopups from "@/components/products/ProductActionPopups"
import Link from "next/link"

const page = () => {
  return (
    <div className="relative">
      {/* HEADER SECTION  */}
      <div className="flex items-center justify-between">
        <div className="gap-2">
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-slate-400">Manage your products here.</p>
        </div>

        <Link href="/content/products/addProduct">
          <Button 
            className="flex items-center gap-2 cursor-pointer bg-[#2666CF] text-white hover:bg-[#2666CF]"
          >
            <Plus color="white"/>
            Add New Product
          </Button>
        </Link>
      </div>

      {/* PRODUCTS CARD  */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-2 py-4">
        {dummyProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* CLIENT COMPONENT THAT WILL DISPLAY EDIT AND DELETE COMPONENTS(so we can maintain the page being a SC) */}
      <ProductActionPopups/>

    </div>
 )
}

export default page