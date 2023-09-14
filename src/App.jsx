import { useState } from 'react'
import './App.css'
import Cart from './component/cart/cart'
import Header from './component/header/Header'
import Shirts from './component/shirt-con/shirts/shirts'

function App() {
  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0)

  const handleCart = (shirt, Price, SKU) => {
    const reWrite = cart.find((item) => item.SKU === SKU)
    if (reWrite) {
      return alert('you already add this item on your cart')
    } else {
      setCart([...cart, shirt]);
      setTotal(total + Price)
    }
  }

  



  return (
    <>
      <Header></Header>
      <div className='flex flex-col-reverse md:flex-row'>
        <Shirts handleCart={handleCart}></Shirts>
        <Cart cart={cart} total={total}></Cart>
      </div>
    </>
  )
}

export default App
