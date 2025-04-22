import { useState } from "react"
import style from "./App.module.css"
import { Header } from "./components/header.tsx"
import { TeskItem } from "./components/taskItem.tsx"

type Task = {
  id: number
  text: string
  complete: boolean
}



function App() {
  const [taskText, setTaskText] = useState("")
  const [tasks, setTasks] = useState<Task[]>([])
  // Função para pega o valor que a pessoa digitar no input
  // no Inuput
  function handelChangeText(text: string) {
    console.log(text)
}

function addTask() {
  setTasks([{id: Date.now(), text: taskText, complete: false}])
}

  return (
    <div className={style.container}>
      <div className={style.paper}>
        <Header addTask={addTask} handleTaskNewText={handelChangeText}/>
        {
          tasks.map((task) => {
            return(
              <p>{task.text}</p>
            )
          })
        }
        <TeskItem/>
        <TeskItem/>
        <TeskItem/>
        <TeskItem/>
      </div>
    </div>
  )
}

export default App
