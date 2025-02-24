import axios from "axios";
// import "dotenv/config";

// const { NODE_ENV } = process.env.NODE_ENV;
// const URL = NODE_ENV === "DEV" ? "http://localhost:3000/api" : "/api";
// const URL = "http://localhost:3000/api";
const URL = "https://spotifyclone-z6kf.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);
