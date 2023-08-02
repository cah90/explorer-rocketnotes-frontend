import axios from "axios"

export const api = axios.create({
	baseURL: "https://rocketnotes-backend-4rs0.onrender.com",
})
