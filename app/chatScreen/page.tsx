import { Button } from "@/components/ui/button";

const page = () =>{ 
    return (
        <div className=" flex flex-1 min-h-screen w-full">
          {/* FOR WHEN THERE IS NO CHATS  */}
          <div className="flex flex-1 justify-center items-center w-full min-h-full">
            <div className="flex-column gap-1">
              <h1 className="font-semibold text-xl">No chats yet.</h1>
              <Button className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white border border-slate-300">Start Conversation</Button>
            </div>
          </div>
        </div>
    )
}

export default page;