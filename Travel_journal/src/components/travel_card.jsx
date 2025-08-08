export default function TravelCard({ image, countryName, countryLocation, googleMapLink, date, description }) {
  return (
    <div className="countryTravelCard">
      <img className="pictureCard" src={image} />
      <div className="countryDescription">
        <div className="locationDesc">
          <img src="/src/assets/location.png" className="locationIcon descTextStyle" />
          <div className="countryLocation descTextStyle">{countryLocation}</div>

          <a href={googleMapLink} className="googleMapLink descTextStyle">
            View on Google Maps
          </a>
        </div>
        <div className="countryName descTextStyle">{countryName}</div>
        <div className="dateCountry descTextStyle">{date}</div>
        <div className="descriptionCountry descTextStyle">{description}</div>
      </div>
    </div>
  );
}
