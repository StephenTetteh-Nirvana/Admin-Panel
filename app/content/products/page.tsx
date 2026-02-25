import {dummyProducts} from "@/dummyProducts"
import { product } from "@/types/types"
import ProductCard from "@/components/products/ProductCard"

const page = () => {
    return (
        <div>
          <div className="gap-2">
            <h1 className="text-2xl font-bold">Products</h1>
            <p className="text-slate-400">Manage your products here.</p>
          </div>
  
           {/* PRODUCTS CARD  */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-2 py-4">
            {dummyProducts.map((product: product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

    )
}

export default page