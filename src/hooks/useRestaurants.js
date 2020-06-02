import React, {useState, useEffect} from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "buffalo, ny"
        }
      });
      setRestaurants(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something Went Wrong.")
    }
  };

  useEffect(() => {
    searchApi("pasta")
  }, []);

  return [searchApi, restaurants, errorMessage];
}