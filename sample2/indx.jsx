import useState from 'react'

const Sample2 = () => {
  const [value, setValue] = useState('')
  const [value1, setValue1] = useState('')
  const handleChange = e => setValue1(e.target.value)
  const handleClick = e => setValue(value1)
  return (
    <>
      <p>{value}</p>
      <input type='text' onChange={handleChange} />
    <button onClick={handleClick}>click me</button>
    </>
  )
}

export default Sample2
