
import Header from "./components/Header";
import { BrowserRouter} from "react-router-dom"
import MyRoutes from "./components/MyRoutes";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <MyRoutes />
    </BrowserRouter>

  )
}

export default App
