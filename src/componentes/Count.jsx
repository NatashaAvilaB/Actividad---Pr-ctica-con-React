import React, {useState} from 'react'

const Count = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
        Count = {count}
        <button onClick={() => setCount(count + 1)}>suma</button>
    </div>
  )
}

export default Count