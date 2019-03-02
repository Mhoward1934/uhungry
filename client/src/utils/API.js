import axios from "axios";

const BASEURL = "https://api.yummly.com/v1/api/recipes?";
//const ID = process.env.APIID;
//const KEY = process.env.APIKEY;
const ID = "";
const KEY = "";

export default {
  search: function(query) {
    console.log(ID, KEY)
    return axios.get(BASEURL + ID + KEY + query);
  }
};
