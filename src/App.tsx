import { useState } from 'react'
import './App.css'
import Parent from './parent'
import useCounterStore from './store/counter'

function App() {
  const [count, setCount] = useState(0)

  const removeCounter = useCounterStore(({ removeCounter }) => removeCounter);
  const addCounter = useCounterStore(({ addCounter }) => addCounter);

  return (
    <>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          addCounter(10);
          removeCounter()
        }}
        >
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Parent
        counterValue={count}
      />
    </>
  )
}

export default App


/*


const = ReduxStore = {
  todolist: {

  },
  forms: { },
  landingPage: { },
}



*/