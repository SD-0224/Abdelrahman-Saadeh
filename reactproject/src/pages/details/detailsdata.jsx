import { useState, useEffect } from "react";
import { Detailsmain } from "./detailsmain";
import { Detailcontainer } from "./detailscontianer";
import { Detailstopics } from "./detailstopics";
import { Detailscard } from "./detailscard";
import { Footer } from "../../components/shared/footer";
import { useParams } from "react-router-dom";

export function DetailsData() {
  const [cardDetails, setcardDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await fetch(
          `https://tap-web-1.herokuapp.com/topics/details/${id}`
        );
        const data = await response.json();
        setcardDetails(data);
        console.log("data is", data);
      } catch (error) {
        console.error("error is", error);
      }
    }
    fetchDetails();
  }, [id]);

  return (
    <>
      {cardDetails && (
        <>
          <Detailcontainer details={cardDetails} />
          <Detailscard detailscrd={cardDetails} />
          <Detailstopics detailtopics={cardDetails} />
        </>
      )}
    </>
  );
}
