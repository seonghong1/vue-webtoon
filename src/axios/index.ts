import axios from "axios";

const Axios = axios.create({
  baseURL: "https://korea-webtoon-api.herokuapp.com/",
});

export default Axios;
