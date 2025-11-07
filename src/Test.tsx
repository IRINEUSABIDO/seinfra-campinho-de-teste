import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu"
import { Button } from "./components/ui/button.tsx"

function App() {
  return (
    <div className="flex min-h-svh flex-col bg-red-950 items-center justify-center">
      <Button className="m-2">Click me</Button>
      {Array.from({ length: 9 }).map((_, i) => {
        return (
          <Button key={i} className="m-2">Clica ai</Button>
        )
      })}
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-blue-400">Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default App
