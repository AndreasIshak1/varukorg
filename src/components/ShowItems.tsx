import { useContext } from "react"
import { Varukorg } from "../context/Varukorg"

export const ShowItems = () => {
  const itemList = useContext(Varukorg);
  return (
    <>
      <ul>{itemList.map((item, index) => (
        <li key={index}>
          <h3>{item.name}{item.price}</h3>
        </li>
      ))}</ul>
      <div>ShowItems</div>
    </>
  )
}
