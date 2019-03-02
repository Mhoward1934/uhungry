import axios from "axios";

const BASEURL = "https://api.yummly.com/v1/api/recipes?";
//const ID = process.env.APIID;
//const KEY = process.env.APIKEY;
const ID = "_app_id=5e18238c&";
const KEY = "_app_key=544f6e5d2d082b6920da1b1b3da50628&q=";

export default {
  search: function(query) {
    console.log(ID, KEY)
    return axios.get(BASEURL + ID + KEY + query);
  }
};
