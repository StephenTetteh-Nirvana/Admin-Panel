"use client"

import { useMainContext } from "@/context/MainContext"
import { AnimatePresence, motion } from "motion/react" 
import CategoryDeleteCard from "./CategoryDeleteCard"
import AddCategoryCard from "./AddCategoryCard"
import EditCategoryCard from "./EditCategoryCard"

const CategoriesActionPopups = () => {
    const {showNewCategory,showCategoryDeleteCard,showEditCategoryCard} = useMainContext()

    return ( 
      <>
      <AnimatePresence>
        {/* ADD CATEGORY CARD POPUP   */}
        {showNewCategory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

            <motion.div 
              initial={{ scale: 0.7 }}
              animate={{ scale: 1}}
              exit={{ scale: 0.7 }}
              className="w-full"
            >
              <AddCategoryCard/>
            </motion.div>
          </motion.div>
        )}


        {/* DELETE CARD POPUP   */}
        {showCategoryDeleteCard && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

            <motion.div 
              initial={{ scale: 0.7 }}
              animate={{ scale: 1}}
              exit={{ scale: 0.7 }}
              className="w-full"
            >
              <CategoryDeleteCard/>
            </motion.div>
          </motion.div>
        )}

        {/* EDIT CARD DETAILS POPUP  */}
        {showEditCategoryCard && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

            <motion.div 
              initial={{ scale: 0.7 }}
              animate={{ scale: 1}}
              exit={{ scale: 0.7 }}
              className="w-full"
            >
              <EditCategoryCard/>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </>

    )
}

export default CategoriesActionPopups;