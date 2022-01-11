import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID bb4U_aouqUj7EZNyO6iG9fiVa8y8mBPeqsZ0uWNYrOo",
    },
});
