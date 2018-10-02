import axios from "axios";

const BASEURL = function (query) {
  const key_arr = ["bCPHwdQjJA9zxracrc6jBKDdeVfvlECjRIcKAA0kDL9BbXQ4v1k7fjIMevyR5hzE", "bCPHwdQjJA9zxracrc6jBKDdeVfvlECjRIcKAA0kDL9BbXQ4v1k7fjIMevyR5hzE", "bCPHwdQjJA9zxracrc6jBKDdeVfvlECjRIcKAA0kDL9BbXQ4v1k7fjIMevyR5hzE", "bCPHwdQjJA9zxracrc6jBKDdeVfvlECjRIcKAA0kDL9BbXQ4v1k7fjIMevyR5hzE"];
  const key = key_arr[Math.floor(Math.random() * key_arr.length)]
  
  return 'https://www.zipcodeapi.com/rest/bCPHwdQjJA9zxracrc6jBKDdeVfvlECjRIcKAA0kDL9BbXQ4v1k7fjIMevyR5hzE/radius.json/27609/10/mile' + key + '&key=' + query
   
}



export default {
  search: function (query) {
    const url = BASEURL(query)
    return axios.get(url)
  }
}; 