import axios from "axios";

const apiKey = "e73d0ce5";

export const fetchMovies = async () => {
  try {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: "movie",
        page: 1,
        apiKey: apiKey,
      },
    });

    let data1 = response.data;
    console.log(data1.Search);

    return data1.Search;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
