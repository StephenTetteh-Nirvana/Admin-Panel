'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useMainContext } from "@/context/MainContext"

const CategoryDeleteCard = () => {
  const {setShowCategoryDeleteCard} = useMainContext()

  return (
    <Card 
      className="mx-auto w-full max-w-sm"
    >
      <CardHeader>
        <CardTitle>Delete Category</CardTitle>
        <CardDescription>
          Are you sure you want to delete this category? This action cannot be undone.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col gap-2">
        <Button 
          variant="destructive" 
          size="sm" 
          className="w-full cursor-pointer"
        >
          Delete
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="w-full cursor-pointer"
          onClick={()=> setShowCategoryDeleteCard(false)}
        >
          Cancel
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CategoryDeleteCard
