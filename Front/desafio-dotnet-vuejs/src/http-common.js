import axios from "axios";
export default axios.create({
    baseURL: "https://localhost:5173/",
    headers: {
        "Content-type": "application/json"
    }
});