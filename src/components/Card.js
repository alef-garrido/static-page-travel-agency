export default function Card(props) {
  return (
    <div className="card">
      <div className="thumbnail">
        <img src={ `./img/${props.img}` } alt="thumbnail" />
      </div>
      <small>
        <img src="../locaion-icon.png" alt=""/> 
        <h4>{ props.location }</h4>
        <a>{ props.googleMapsUrl }</a>  
      </small>
      <h2>{ props.title }</h2>
      <p>{ `${props.startDate} - ${props.endDate}` }</p>
      <p>{ props.description }</p>
    </div>
  )
}