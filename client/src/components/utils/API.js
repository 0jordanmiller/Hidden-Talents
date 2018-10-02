import axios from "axios";

const BASEURL = function (query) {
  const key_arr = ["AIzaSyDTzb-iUAYqARgI2ydk8pkO8UTuKSC8mjc", "AIzaSyDTzb-iUAYqARgI2ydk8pkO8UTuKSC8mjc", "AIzaSyDTzb-iUAYqARgI2ydk8pkO8UTuKSC8mjc", "AIzaSyDTzb-iUAYqARgI2ydk8pkO8UTuKSC8mjc"];
  const key = key_arr[Math.floor(Math.random() * key_arr.length)]
  console.log("raleigh");
  return 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + query + '&key=' + key

}
    
export default {
  search: function (query) {
    const url = BASEURL(query)
    return axios.get(url)
  }
}; 