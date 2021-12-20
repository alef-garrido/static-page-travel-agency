export default function Card(props) {
  return (
    <div className="card">
      <div className="thumbnail">
        <img src={ props.img } alt="thumbnail" />
      </div>
    </div>
  )
}