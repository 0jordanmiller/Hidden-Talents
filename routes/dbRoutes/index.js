const router = require("express").Router();
const db = require("../../controllers/talentController");

router.get("/search", (req, res) => {
    db.findAll({ 'zipcode': { $in: [99999, 99998] } }, res)
});

module.exports = router;
