import { Header } from "./components/Header"
import { Todo } from "./components/Todo"

import style from "./App.module.css";

function App() {
  return (
   <div>
      <Header />

      <main className={style.container}>
        <Todo />
      </main>
      
   </div>
  )
}

export default App
