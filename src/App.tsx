import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { loginSchema } from "./zod/zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "./components/ui/field";
import { Button_Input } from "./components/ui/buttonInput";
import { Input } from "./components/ui/input";

export default function App() {
  const form = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      // CPF: "",
      password: "",
      // name: "",
      // telephone: 0,
    },
    resolver: zodResolver(loginSchema),
  });

  function onSubmit() {
    console.log("super patapim");
  }

  return (
    <div className="w-screen h-screen border-8">
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <FieldGroup className="">
          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="font-medium text-sm">Nome</FieldLabel>
                <Input {...field} id={field.name} className="border-seinfra-blue-light-200 rounded-3xl bg-white border-2  w-[90vw] sm:w-[600px] px-4 py-5" />
                {fieldState.invalid && <FieldError errors={[{ message: "MEGA PATAPIM" }]} />}
              </Field>
            )}
          />
        </FieldGroup>
      </form>
    </div>
  );
}
