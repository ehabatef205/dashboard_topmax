const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  viewProfile,
  signUp,
  updateProfile,
  deleteProfile,
  login,
  viewUser,
  getall,
  deleteuser
} = require("../../controllers/UserController");

router.get("/view_profile", checkToken, viewProfile);
router.get("/all",getall)
router.post("/view_user", viewUser);
router.post("/sign_up", signUp);
router.post("/login", login);
router.patch("/update_profile", checkToken, updateProfile);
router.delete("/delete_profile", checkToken, deleteProfile);
router.delete("/delete_user", checkToken, deleteuser);

module.exports = router;
