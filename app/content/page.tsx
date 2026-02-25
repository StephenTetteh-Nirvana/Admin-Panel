import ActiveAccountsCard from "@/components/dashboard/RecentOrders";
import Cards from "@/components/dashboard/Cards"
import SalesPreviewCard from "@/components/dashboard/SalesPreviewCard";

const page = () =>{ 
  return (
    <div className="flex flex-col gap-2 min-h-screen w-full">
      <div className="px-4">
        <h1 className="text-2xl font-bold">Welcome, Admin!👋 </h1>
        <p className="text-slate-400">Welcome to your admin dashboard</p>
      </div>
      <Cards />
      <div className="flex flex-col md:flex-row w-full gap-3 px-4">
        <SalesPreviewCard />
        <ActiveAccountsCard/>
      </div>
    </div>

    
  )
}

export default page;