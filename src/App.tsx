import Todos from "./components/Todos"
import Addtodo from "./components/Addtodo"
import Navbar from "./components/Navbar"
import './App.css'

const App = () => {
  return (
    <main>
      <h2>TODO APP</h2>
      <Navbar />
      <Addtodo />
      <Todos />

    </main>
  )
}

export default App