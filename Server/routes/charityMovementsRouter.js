const express = require("express");
const router = express.Router();
const charityMovementsController = require("../controllers/charityMovementsController");


router.get("/charity_movement", charityMovementsController.allCharityMovement);
router.post("/charity_movement", charityMovementsController.newCharityMovement);
router.get("/charity_movement/:id", charityMovementsController.oneCharityMovement);
router.put("/charity_movement/:id", charityMovementsController.updateCharityMovement);
router.delete("/charity_movement/:id", charityMovementsController.deleteCharityMovement);

module.exports = router;