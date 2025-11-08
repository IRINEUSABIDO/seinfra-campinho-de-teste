import { Button } from "./components/ui/button.tsx"

function App() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center">
            <Button className="m-2">Click me</Button>
            {Array.from({ length: 5 }).map((_, i) => {
                return (
                    <Button key={i} className="m-2">Clica ai</Button>
                )
            })}
        </div>
    )
}

export default App
