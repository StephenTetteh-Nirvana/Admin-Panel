import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import CategoryTableActions from "./CategoryTableActions"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Fashion",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
   {
    invoice: "INV002",
    paymentStatus: "Fashion",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  }
]

const CategoriesTable = () => {
  return (
    <Table className="border border-slate-300 mt-4 ">
      <TableCaption>A list of all your categories.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-bold">Id</TableHead>
          <TableHead className="font-bold text-center">Name</TableHead>
          <TableHead className="text-right font-bold">Actions</TableHead>
        </TableRow>
      </TableHeader> 
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell className="text-center">{invoice.paymentStatus}</TableCell>
            <TableCell className="flex justify-end">
                <CategoryTableActions/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default CategoriesTable
