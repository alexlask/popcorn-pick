import axios from "axios";

const apiKey = "e73d0ce5";

export const fetchMovies = async (title, page) => {
  try {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: title,
        page: page,
        apiKey: apiKey,
      },
    });

    let data1 = response.data;

    return data1.Search;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
