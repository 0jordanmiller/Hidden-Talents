import axios from "axios";

const BASEURL = function (query) {
  const key = "4AMI23anNLS785IAwVUn8UbOHtaBsHkk08q8fQDpdwHhWtIutsD1VZtI2Su2HFOT";

  return `https://www.zipcodeapi.com/rest/${key}/radius.json/${query}/5/miles?minimal`;
};

export default {
  search: function (query) {
    const url = BASEURL(query);

    return axios.get(url, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'content-type': 'text/plain'
      }
    }).then(function (res) {
      return res.data.zip_codes;
    });
  }
};




