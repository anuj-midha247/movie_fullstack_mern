import axios from 'axios';

export const getAllMovies = async () => {
    const res = await axios.get("http://localhost:5000/movie").catch((e) => console.log(e));
    if (res.status !== 200) {
        return console.log("No Data");
    }
    const data = await res.data;
    return data;
}