import { Button } from "./components/ui/button.tsx"
import { Input } from "./components/ui/input.tsx"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Input></Input>
      <Button className="px-4 py-4 w-[90vw] max-w-[600px] rounded-3xl font-semibold text-sm bg-seinfra-blue-light-700">Continuar</Button>
    </div>
  )
}

export default App
