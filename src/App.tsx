import { useState } from 'react'
import useCounterStore from '@/store/counter'
import Parent from '@/parent'
import '@/App.css'

function App() {
  const [count, setCount] = useState(0)

  const removeCounter = useCounterStore(({ removeCounter }) => removeCounter);
  const addCounter = useCounterStore(({ addCounter }) => addCounter);

  return (
    <>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          addCounter(10)
          removeCounter()
        }}
        >
          count is {count}
        </button>
      </div>
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