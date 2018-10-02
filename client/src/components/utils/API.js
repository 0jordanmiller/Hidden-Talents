import axios from "axios";

<<<<<<< HEAD
const BASEURL = function(query) {
  const key_arr = [
    "AIzaSyDTzb-iUAYqARgI2ydk8pkO8UTuKSC8mjc",
    "AIzaSyDTzb-iUAYqARgI2ydk8pkO8UTuKSC8mjc",
    "AIzaSyDTzb-iUAYqARgI2ydk8pkO8UTuKSC8mjc",
    "AIzaSyDTzb-iUAYqARgI2ydk8pkO8UTuKSC8mjc"
  ];
  const key = key_arr[Math.floor(Math.random() * key_arr.length)];
  console.log("raleigh");
  return (
    "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" +
    query +
    "&key=" +
    key
  );
};
=======
const BASEURL = function (query) {
  const key_arr = ["bCPHwdQjJA9zxracrc6jBKDdeVfvlECjRIcKAA0kDL9BbXQ4v1k7fjIMevyR5hzE", "bCPHwdQjJA9zxracrc6jBKDdeVfvlECjRIcKAA0kDL9BbXQ4v1k7fjIMevyR5hzE", "bCPHwdQjJA9zxracrc6jBKDdeVfvlECjRIcKAA0kDL9BbXQ4v1k7fjIMevyR5hzE", "bCPHwdQjJA9zxracrc6jBKDdeVfvlECjRIcKAA0kDL9BbXQ4v1k7fjIMevyR5hzE"];
  const key = key_arr[Math.floor(Math.random() * key_arr.length)]
  
  return 'https://www.zipcodeapi.com/rest/bCPHwdQjJA9zxracrc6jBKDdeVfvlECjRIcKAA0kDL9BbXQ4v1k7fjIMevyR5hzE/radius.json/27609/10/mile' + key + '&key=' + query
   
}


>>>>>>> d4ddc9f53312f93769ed9b56293d6b282793b203

export default {
  search: function(query) {
    const url = BASEURL(query);
    return axios.get(url);
  }
};
