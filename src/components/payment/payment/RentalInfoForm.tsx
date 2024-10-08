import { PaymentSectionHeader } from "./PaymentSectionHeader";
import { RentalInfoSchemaType } from "@/schemas";
import { useRentalInfoForm } from "@/hooks";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { SectionCards } from "@/components/sectionCar/SectionCards";
import { SelectFieldForm } from "@/components/form/SelectFieldForm";
import { CalendarFieldForm } from "@/components/form/CalendarFieldForm";
import { dataCities } from "@/data/city.data";
import { hoursOfDay } from "@/data";

interface RentalInfoFormProps {
  defaultValues: RentalInfoSchemaType
  onSubmit: (values: RentalInfoSchemaType) => void
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const cities = dataCities
const hours = hoursOfDay.map((hour) => ({ id: hour, description: hour }))

export const RentalInfoForm: React.FC<RentalInfoFormProps> = ({ defaultValues, onSubmit, setStep }) => {
  const form = useRentalInfoForm(defaultValues)

  const onClickPrevious = () => {
    setStep((prev) => prev - 1)
  }

  return (
    <section className="bg-card ">
      <Form {...form}>
        <PaymentSectionHeader
          title="Rental Info"
          description="Please select your rental date"
          stepLabel={2}
        />

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <SectionCards className="grid grid-cols-0 sm:grid-cols-0 gap-7 ">

            <h1 className="font-bold">Pick - Up</h1>
            <SectionCards className="grid grid-cols-0 sm:grid-cols-2 items-center gap-7 p-0">
              <FormField
                control={form.control}
                name="pickUpLocation"
                render={({ field }) => (
                  <SelectFieldForm
                    field={field}
                    label="Locations"
                    placeholder="Select your city"
                    data={cities}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="pickUpDate"
                render={({ field }) => (
                  <CalendarFieldForm
                    field={field}
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="pickUpTime"
                render={({ field }) => (
                  <SelectFieldForm
                    field={field}
                    label="Time"
                    placeholder="Select your time"
                    data={hours}
                  />
                )}
              />
            </SectionCards>

            <h1 className="font-bold">Drop - Off</h1>
            <SectionCards className="grid grid-cols-0 sm:grid-cols-2 items-center gap-7 p-0">
              <FormField
                control={form.control}
                name="dropOffLocation"
                render={({ field }) => (
                  <SelectFieldForm
                    field={field}
                    label="Locations"
                    placeholder="Select your city"
                    data={cities}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="dropOffDate"
                render={({ field }) => (
                  <CalendarFieldForm
                    field={field}
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="dropOffTime"
                render={({ field }) => (
                  <SelectFieldForm
                    field={field}
                    label="Time"
                    placeholder="Select your time"
                    data={hours}
                    side="top"
                  />
                )}
              />
            </SectionCards>

            <SectionCards className="flex justify-end gap-7">
              <Button variant={"link"} type="button" onClick={onClickPrevious}>Regresar</Button>
              <Button variant={"default"} type="submit">Continuar</Button>
            </SectionCards>

          </SectionCards>
        </form>
      </Form>
    </section>
  );
};
