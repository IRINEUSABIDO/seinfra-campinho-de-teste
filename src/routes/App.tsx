import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Field, FieldError, FieldGroup, FieldLabel } from "./components/ui/field";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginSchema } from "./schemas/zod.ts";

import yellowLine from "./assets/IconsNewSvgs/yellowLine.svg";
import pinkLine from "./assets/IconsNewSvgs/pinkLine.svg";
import ConectaSeinfraIcon from "./assets/IconsNewSvgs/ConectaSeinfra.svg";
import LogoPrefeitura from "./assets/IconsNewSvgs/LogoPrefeitura.svg";

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
    <div className="flex min-h-screen h-auto flex-col overflow-x-hidden ">
      <img
        src={pinkLine}
        alt="Linha Rosa Background"
        className="absolute left-0 top-0"
      />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-8 flex-col justify-center items-center w-screen h-auto min-h-screen"
      >
        <div className="text-center mt-[5%]">
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
                <FieldLabel htmlFor={field.name} className="text-center w-full justify-self-start max-w-[600px]">CPF</FieldLabel>
                <Input {...field} id={field.name} />
                {fieldState.invalid && (<FieldError errors={[fieldState.error]} />)}
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className="text-center w-full justify-self-start max-w-[600px]">Senha</FieldLabel>
                <Input {...field} id={field.name} />
                {fieldState.invalid && (<FieldError errors={[fieldState.error]} />)}
                <Button className="px-4 py-3 mt-14 rounded-3xl max-w-[600px]">Continuar</Button>
              </Field>
            )}
          />
        </FieldGroup>
        <footer className="flex items-center mt-4 text-center justify-center flex-col gap-8">
          <h1 className="text-seinfra-blue-light-500">
            Não tem uma conta? <br />{" "}
            <a href="/criarConta" className="text-yellow-300 underline">
              Criar Conta
            </a>
          </h1>
          <div className="flex items-center justify-center mt-[5%] mb-[5%] gap-y-12 gap-x-24 sm:flex-row flex-col">
            <img src={ConectaSeinfraIcon} alt="Logo do Conecta Seinfra" />
            <img src={LogoPrefeitura} alt="LogoPrefeitura de Nova Russas" />
          </div>
        </footer>
        <img
          src={yellowLine}
          alt="Yellow Line"
          className="absolute right-0 bottom-0"
        />
      </form>
    </div>
  );
}

export default App;
