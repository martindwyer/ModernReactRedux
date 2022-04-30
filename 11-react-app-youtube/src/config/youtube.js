import axios from "axios";
import KEYS from "./keys";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 6,
    key: KEYS.YouTubeAPIKey,
  },
});

export default youtube;
