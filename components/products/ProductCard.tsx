import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Eye } from "lucide-react"
import ProductCardDropdown from "./ProductCardDropdown"
import ViewDetailsButton from "./ViewDetailsButton"

interface ProductCardProps {
  product: {
    id: number,
    title: string,
    price: number,
    stock: number,
    description: string,
    image: string
  }
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="transition-all ease-in-out relative mx-auto w-full max-w-sm pt-0 rounded-lg">
      <div className="absolute inset-0 z-30 aspect-video bg-black/25 rounded-tr-lg rounded-tl-lg" />
      <img
        src={product.image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 
        grayscale dark:brightness-40 rounded-tr-lg rounded-tl-lg"
      />

      <CardHeader>
        <CardAction>
          <ProductCardDropdown product={product}/>
        </CardAction>
        <CardTitle className="line-clamp-3 md:line-clamp-2">{product.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {product.description}
        </CardDescription>
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between mb-3">
          <CardTitle>${product.price}</CardTitle>
          <Badge variant="secondary" 
            className={product && product.stock == 0 ? "bg-red-500/80 font-semibold md:text-[12px] text-white" : product && product.stock < 10 ? "bg-yellow-500/80 font-semibold md:text-[12px] text-white" : "bg-green-500/80 font-semibold md:text-[12px] text-white"}
          >
            {product && product.stock ? product.stock + " in stock" : "Out of Stock"}
          </Badge>
        </div>
      </CardHeader>

      <CardFooter>
        <ViewDetailsButton product={product}/>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
