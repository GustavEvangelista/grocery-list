import { useRef, useState } from 'react' // React Hooks
import { v4 } from 'uuid'
import { AddButton, Container, Product, TrashButton } from './styles'

function Home() {
  const inputRef = useRef()
  const [products, setProducts] = useState([])

  function cliqueiNoBotao() {
    setProducts([{ id: v4(), name: inputRef.current.value }, ...products])
    inputRef.current.value = ''
  }

  function deleteProduct(id) {
    setProducts(products.filter(products => products.id !== id))
  }

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input placeholder="produto... " ref={inputRef} />
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

      {
        products.map(products => (
          <Product key={products.id}>
            <p>
              {products.name}
            </p>
            <TrashButton onClick={() => deleteProduct(products.id)}>🗑️</TrashButton>
          </Product>
        ))
      }

    </Container>
  )
}

export default Home
