const router = require("express").Router();
const db = require("../../controllers/talentController");

router.post("/search", (req, res) => {
  console.log(req.body.zipcodes);
  db.findAll(
    {
      zipcode: {
        $in: req.body.zipcodes
      }
    },
    res
  );
});

module.exports = router;
