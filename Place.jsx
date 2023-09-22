import React from "react"

export default function Place(props) {
  return (
    <div className="visited-places">
      <img
        className="place--picture"
        alt="location-photo"
        src={props.place.imageUrl}
      />
      <div className="flex-container">
        <div className="location--google">
          <img className="pin--icon" alt="pin-photo" src="./images/pin.png" />
          <p className="location--name">{props.place.location}</p>
          <a
            target="_blank"
            className="google--link"
            href={props.place.googleMapsUrl}
          >
            View on Google Maps
          </a>
        </div>
        <h2>{props.place.title}</h2>
        <p className="dates">{props.place.startDate}</p>
        <p className="description">{props.place.description}</p>
      </div>
    </div>
  )
}
