import { Button } from "./components/ui/button.tsx"
import { Input } from "./components/ui/input.tsx"
import { Field, FieldGroup, FieldLabel } from "./components/ui/field.tsx"

function App() {
  function onSubmit() {
    console.log("patapim")
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <form className="w-screen h-screen">
        <FieldGroup>
          <Field>
            <FieldLabel>Senha</FieldLabel>
            <Input></Input>
            <Button className="px-4 py-4 w-[90vw] max-w-[600px] rounded-3xl font-semibold text-sm bg-seinfra-blue-light-700">Continuar</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}

export default App
