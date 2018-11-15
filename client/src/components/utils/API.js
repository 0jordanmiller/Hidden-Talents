import axios from "axios";

const BASEURL = function(query) {
  const key =
    "5J2Armouc6yQtLouSz5fsVMRte6nJAtNI1vTZ3Y0Oey8VRQizB6E7BZF3MRnAwGB";

  return `https://www.zipcodeapi.com/rest/${key}/radius.json/${query}/5/miles?minimal`;
};

export default {
  search: function(query) {
    const url = BASEURL(query);

    return axios
      .get(url, {
        headers: {
          crossdomain: true,
          "X-Requested-With": "XMLHttpRequest",
          "content-type": "text/plain"
        }
      })
      .then(function(res) {
        return res.data.zip_codes;
      });
  }
};
