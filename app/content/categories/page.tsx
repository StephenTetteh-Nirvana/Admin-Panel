import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import CategoriesTable from "@/components/categories/CategoriesTable"
import CategoriesActionPopups from "@/components/categories/CategoriesActionPopups"
import AddNewCategoryButton from "@/components/categories/AddNewCategoryButton"

const page = () => {
    return (
      <div className="relative">
        {/* HEADER SECTION  */}
        <div className="flex items-center justify-between w-full">
          <div className="gap-2">
            <h1 className="text-2xl font-bold">Categories</h1>
            <p className="text-slate-400">View and manage your categories here.</p>
          </div>
          
          <AddNewCategoryButton/>
        </div>

        {/* CATEGORIES TABLE  */}
        <CategoriesTable/>

        {/* POPUPS FOR CATEGORIES PAGE  */}
        <CategoriesActionPopups/>
      </div>
    )
}

export default page