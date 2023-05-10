const usersController = require("../controllers/usercontroller.js");
const artistContoller = require("../controllers/artistController");
const imageController = require("../controllers/imgController");
const eventContoller = require("../controllers/eventController");
const multer = require("multer");
const path = require("path");
const router = require("express").Router();

//use router
router.post("/authLogin", usersController.checkLogin);
router.post("/userRegistration", usersController.addUser);
router.post("/artistRegisteration", artistContoller.addArtist);

//image adding in db
const storage = multer.diskStorage({
  destination: "../../public/DBimage/",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

//image routers
router.post(
  "/addImage",
  upload.single("image"),
  imageController.addprofileImage
);
router.get("/getProfImage", imageController.getProfileImage);

//event routing
router.post("/addevent", eventContoller.addEvent);
router.get("/geteventdetails", eventContoller.getEventDetails);

module.exports = router;
