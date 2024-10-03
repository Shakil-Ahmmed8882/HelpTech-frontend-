import { Nexios } from "nexios-http";


const NexiosInstance = new Nexios({
    baseURL: "http://localhost:5000/api/v1",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000
})


export default NexiosInstance