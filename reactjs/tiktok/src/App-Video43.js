import { useState, useMemo, useRef } from "react"


// --------------------
// ***** Video 43 *****

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const nameRef = useRef()

  const handleSubmit = () => {
      setProducts([...products, {
          name,
          price: +price
      }])
      setName('')
      setPrice('')

      nameRef.current.focus()
  }

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log('Tính toán lại...')
      return result + prod.price
    }, 0)

    return result
  }, [products])

  return (
      <div style={{padding: '10px 32px'}}>
          <input
            ref={nameRef}
            value = {name}
            placeholder = "Enter name..."
            onChange = {e => setName(e.target.value)}
          />
          <br />

          <input
            value = {price}
            placeholder = "Enter price..."
            onChange = {e => setPrice(e.target.value)}
          />
          <br />

          <button onClick={handleSubmit}>Add</button>
          <br />

          <p>Total: {total}</p>
          <ul>
            {products.map((product, index) => (
                <li key = {index}>{product.name} - {product.price}</li>
            ))}
          </ul>
      </div>
  )
}

export default App