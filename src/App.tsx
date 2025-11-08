import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Field, FieldError, FieldGroup, FieldLabel } from "./components/ui/field";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { loginSchema } from "./schemas/zod.ts";
import yellowLine from "./assets/IconsNewSvgs/yellowLine.svg";
import pinkLine from "./assets/IconsNewSvgs/pinkLine.svg";

function App() {
  console.log(yellowLine);

  const form = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      password: "",
      CPF: "",
    },
    resolver: zodResolver(loginSchema),
  });

  function onSubmit() {
    console.log("patapim");
  }

  return (
    <div className="flex min-h-svh flex-col">
      <img
        src={pinkLine}
        alt="Linha Rosa Background"
        className="absolute left-0 top-0"
      />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-8 flex-col justify-center items-center w-screen h-auto min-h-screen"
      >
        <div className="text-center">
          <h1 className="text-5xl font-semibold font-manrope text-seinfra-blue-light-700 mb-4">
            Login
          </h1>
          <p className="text-seinfra-blue-light-500">
            Informe seu CPF e senha para entrar <br /> na sua conta
          </p>
        </div>
        <FieldGroup>
          <Controller
            control={form.control}
            name="CPF"
            render={({ field, fieldState }) => (
              <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>CPF</FieldLabel>
                <Input {...field} id={field.name} />
                {fieldState.invalid && (<FieldError errors={[fieldState.error]} />)}
              </Field>
            )}
          />
          <Field orientation={"vertical"}>
            <FieldLabel>Senha</FieldLabel>
            <Input type="password"></Input>
            <Button className="px-4 py-3 mt-14 rounded-3xl">Continuar</Button>
          </Field>
        </FieldGroup>
      </form>
      <img
        src={yellowLine}
        alt="Linha Amarela Background"
        className="absolute bottom-0 right-0"
      />
    </div>
  );
}

export default App;
