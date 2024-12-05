import axios from "axios";

const apiKey = "e73d0ce5";

let page = 1;

export const getPage = () => {
  return page;
};

export const incrementPage = () => {
  page++;
  return page;
};

export const decrementPage = () => {
  page--;
  return page;
};

export const fetchMovies = async (page) => {
  try {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: "movie",
        page,
        apiKey: apiKey,
      },
    });

    let data1 = response.data;
    console.log(data1);
    console.log(data1.Search);

    return data1.Search;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
