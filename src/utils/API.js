import axios from "axios";

export const randomUsers =()=> {
    return axios.get("https://randomuser.me/api/?results=50")
}


