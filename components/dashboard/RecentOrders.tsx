import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { IconMoodSad } from "@tabler/icons-react"

 let data = [
  {
    id: "1",
    name: "John Doe",
    status: "Completed",
    amount: "$100.00"
  },
  {
    id: "2",
    name: "John Doe",
    status: "Pending",
    amount: "$300.00"
  },
  {
    id: "3",
    name: "John Doe",
    status: "Cancelled",
    amount: "$500.00"
  },
  {
    id: "4",
    name: "John Doe",
    status: "Pending",
    amount: "$700.00"
  }
 ]

const RecentOrders = () => {
  return (
    <Card className="flex flex-col flex-1">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-xl">Recent Orders</CardTitle>
        <CardDescription>Latest recent orders activity</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 items-center pb-0">
       {data && data.length > 0 ? data.map((item) => (
        <div key={item.id} className="flex items-center justify-between w-full py-2 border-b last:border-0">
          <div className="flex gap-3 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>PFP</AvatarFallback>
            </Avatar>
            <div className="">{item.name}</div>
          </div>
          <Badge variant="default" 
            className={item.status === "Completed" 
            ? "bg-green-500 text-white" : item.status === "Pending" 
            ? "bg-slate-800 text-white" : "bg-red-500 text-white"}
          >
            {item.status}
          </Badge>
          <div className="font-medium">{item.amount}</div>
        </div>
      )) : (
        <div className="flex flex-col gap-1 items-center justify-center w-full">
          <IconMoodSad size={80} color="grey"/>
          <h2 className="font-semibold text-slate-700">No recent orders yet.</h2>
        </div>
      )}
      </CardContent>
    </Card>
  )
}

export default RecentOrders
