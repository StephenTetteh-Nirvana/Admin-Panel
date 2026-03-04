import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const EditProductForm = () => {
  return (
    <div className="w-full max-w-md mt-5 py-4">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="product-name"
                   className="font-bold"
                >
                  Product name
                </FieldLabel>
                <Input
                  id="product-name"
                  placeholder="Black Tee"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="product-price"
                   className="font-bold"
                >
                  Price
                </FieldLabel>
                <Input
                  id="product-price"
                  placeholder="$0.00"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="product-stock"
                   className="font-bold"
                >
                  Stock
                </FieldLabel>
                <Input
                  id="product-stock"
                  placeholder="Number of pieces available"
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="product-description"
                  className="font-bold"
                >
                  Description
                </FieldLabel>
                <Textarea
                  id="product-description"
                  placeholder="Add product description here..."
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit" className="bg-[#2666CF] hover:bg-[#2666CF] hover:cursor-pointer">Update</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}

export default EditProductForm;
