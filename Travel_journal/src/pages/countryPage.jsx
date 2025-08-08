import TravelCard from "../components/travel_card";
import data from "../data";
export default function CountryPage() {
  const entryElements = data.map((entry) => {
    return <TravelCard key={entry.id} {...entry} />;
  });
  return (
    <>
      <main>{entryElements}</main>
    </>
  );
}
