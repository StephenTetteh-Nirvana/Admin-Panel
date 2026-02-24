'use client'

import { useState } from "react";
import { Button } from "../ui/button";

// Props typing for UsersList component
interface UsersListProps {
  setOpenList: React.Dispatch<React.SetStateAction<boolean>>;
}

const UsersList = ({setOpenList}: UsersListProps) => {
  const [activeBtn,setActiveBtn] = useState("All")

  return (
    <div className="z-10 absolute top-0 left-0 w-full h-full flex items-center justify-center gap-3 bg-black/40">
      {/* USERS LIST BOX  */}
      <div className="bg-white rounded-[5px] w-[300px] min-h-[300px] p-3">
        <div>
          <h1 className="font-semibold">Users List</h1>
          <div className="flex items-center gap-2 mt-2">
            <Button variant="outline" className={"rounded-full cursor-pointer hover:none " + (activeBtn === "All" ? "bg-blue-500 text-white" : "")} onClick={()=>setActiveBtn("All")}>
              All
            </Button>
            <Button variant="outline" className={"rounded-full cursor-pointer " + (activeBtn === "Recents" ? "bg-blue-500 text-white" : "")} onClick={()=>setActiveBtn("Recents")}>
              Recents
            </Button>
             <Button variant="outline" className="rounded-full cursor-pointer" onClick={()=>setOpenList(false)}>
              Close
            </Button>
            
          </div>
        </div>
      </div>
    </div> 
    )
}

export default UsersList;