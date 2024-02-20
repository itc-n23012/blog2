import useState from 'react'

const Sample1 = () => {
  const [value, setValue] = useState(0)
  const handleCountUp = () => setValue(p => p + 1)
  return (
    <>
      <p>{value}</p>
      <button onClick={handleCountUp}>click me</button>
    </>
  )
}

export default Sample1
