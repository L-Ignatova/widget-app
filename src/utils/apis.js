import axios from "axios";
import { KEY } from "../credentials/cred";

const wikiURL = `https://en.wikipedia.org/w/api.php`;
const googleTranslateURL = `https://translation.googleapis.com/language/translate/v2`;

export const getWikiResults = (term) => axios.get(wikiURL, {
  params: {
    action: "query",
    list: "search",
    origin: "*",
    format: "json",
    srsearch: term,
  }
});

export const getTranslationResults = (text, language) => axios.post(googleTranslateURL, {}, {
  params: {
    q: text,
    target: language,
    key: KEY,
  }
});
