import axios from "axios";

const wikiURL = `https://en.wikipedia.org/w/api.php`;

export const getWikiResults = (term) => axios.get(wikiURL, {
  params: {
    action: "query",
    list: "search",
    origin: "*",
    format: "json",
    srsearch: term,
  }
});
