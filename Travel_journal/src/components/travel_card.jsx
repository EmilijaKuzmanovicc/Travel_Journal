export default function TravelCard(props) {
  return (
    <>
      <div className="countryTravelCard">
        <img className="pictureCard" src={props.image.src} alt={props.image.alt} />
        <div className="countryDescription">
          <div className="locationDesc">
            <img src="/src/assets/location.png" className="locationIcon descTextStyle" />
            <div className="countryLocation descTextStyle">{props.countryLocation}</div>

            <a href={props.googleMapLink} className="googleMapLink descTextStyle">
              View on Google Maps
            </a>
          </div>
          <div className="countryName descTextStyle">{props.countryName}</div>
          <div className="dateCountry descTextStyle">{props.date}</div>
          <div className="descriptionCountry descTextStyle">{props.description}</div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
