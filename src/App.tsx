import { useState } from 'react'
import './App.css'
import { Varukorg } from './context/Varukorg'
import { ICartItems } from './models/ICartItems'
import { ShowItems } from './components/ShowItems'

function App() {
  const [itemList, setItemList] = useState<ICartItems[]>([
    { name: "Apple", price: 1, isAdded: false },
    { name: "Banana", price: 2, isAdded: false },
    { name: "Orange", price: 3, isAdded: false },
    { name: "Grapes", price: 4, isAdded: false },
    { name: "Mango", price: 5, isAdded: false },
    { name: "Strawberry", price: 6, isAdded: false },
    { name: "Blueberry", price: 7, isAdded: false },
    { name: "Pineapple", price: 8, isAdded: false },
    { name: "Watermelon", price: 9, isAdded: false },
    { name: "Peach", price: 10, isAdded: false }
  ]);

  return (
    <>
      <Varukorg.Provider value={itemList}>
        <ShowItems />
      </Varukorg.Provider>
    </>
  )
}

export default App
