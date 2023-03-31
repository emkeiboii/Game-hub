import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "11235de71ba84422b07bbe0778d05f6a",
  },
});
