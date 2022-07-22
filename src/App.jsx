import { Home } from "./pages/Home"
import { Header } from "./components/Header"
import { Upload } from "./components/Upload"
import { Sidebar } from "./components/Sidebar"
import { RouteComponent } from "./route"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <BrowserRouter>
        <RouteComponent>
          <Upload />
        </RouteComponent>
        </BrowserRouter>
        <Sidebar />
      </main>
    </div>

  )
}

export default App
