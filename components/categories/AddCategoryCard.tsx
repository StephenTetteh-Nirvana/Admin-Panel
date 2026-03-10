'use client'

import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useMainContext } from "@/context/MainContext"

const AddCategoryCard = () => {
  const {setShowNewCategory} = useMainContext()

  return (
    <Card 
      className="mx-auto w-full max-w-sm"
    >
      <CardHeader>
        <CardTitle>Add New Category</CardTitle>
        <CardDescription>
          Create a new category for your products. Make sure to save changes.
        </CardDescription>
      </CardHeader>
      <div className="px-5 -mt-4">
        <Field>
          <FieldLabel htmlFor="category-name"
            className="font-bold text-black text-sm"
          >
            Name
          </FieldLabel>
          <Input
            id="category-name"
            placeholder="Category Name"
            required
          
            className="font-semibold text-slate-600 text-black -mt-2"
          />
        </Field>
      </div>
      <CardFooter className="flex flex-row gap-2">
        <Button 
          size="sm" 
          className="cursor-pointer bg-[#2666CF] hover:bg-[#2666CF]"
        >
          Create
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="cursor-pointer"
          onClick={()=> setShowNewCategory(false)}
        >
          Cancel
        </Button>
      </CardFooter>
    </Card>
  )
}

export default AddCategoryCard
