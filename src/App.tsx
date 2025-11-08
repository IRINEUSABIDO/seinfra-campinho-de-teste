import { Button } from "./components/ui/button.tsx";
import { Input } from "./components/ui/input.tsx";
import { Field, FieldGroup, FieldLabel } from "./components/ui/field.tsx";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { loginSchema } from "./schemas/zod.ts";

function App() {

  const form = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      password: "",
    },
    resolver: zodResolver(loginSchema)
  })


  function onSubmit() {
    console.log("patapim");
  }


  return (
    <div className="">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Field orientation={"vertical"}>
            <FieldLabel>Senha</FieldLabel>
            <Input></Input>
          </Field>
        </FieldGroup>
        <FieldGroup>
          <Field orientation={"vertical"}>
            <FieldLabel>CPF</FieldLabel>
            <Input></Input>
            <Button className="px-4 py-3 mt-8 rounded-3xl">Continuar</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}

export default App;
