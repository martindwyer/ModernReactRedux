import axios from "axios";
import Keys from "./keys";

const searchPhotos = async (term) => {
  const response = await axios.get(Keys.UnSplashGetPhotosUrl, {
    params: {
      query: term,
    },
    headers: {
      Authorization: Keys.UnSplashAuthString,
    },
  });

  return response.data.results;
};

export default searchPhotos;
