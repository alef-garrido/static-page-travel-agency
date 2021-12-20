import data from "../data"
import Card from "./Card"

export default function CardContainer() {
  const myArr = data.map(i => {
    return(
      <Card 
        key={i.id}
        {...i}
      />
    )
  })
  return (
    <section className="cards"> { myArr } </section>
  )
}