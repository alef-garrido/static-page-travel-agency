import locationIcon from '../location-icon.png'
export default function Card(props) {
  return (
    <div className="card">
      <div className="thumbnail">
        <img src={ `./img/${props.img}` } alt="thumbnail" />
      </div>
      <div className='description'>
        <small className='location'>
          <div className="icon">
            <img src={ locationIcon } alt=""/> 
          </div>
          <h4>{ props.location }</h4>
          <a href={ props.googleMapsUrl }>
            View on Google Maps </a>  
        </small>
        <h2>{ props.title }</h2>
        <p className='dates'>{ `${props.startDate} - ${props.endDate}` }</p>
        <p className='summary'>{ props.description }</p>
      </div>
    </div>
  )
}