const express = require("express");
const { UserController } = require("../controllers/userController");
const userRouter = express.Router(); //* Grouping terhadap endpoint yg punya prefix yang sama
//* Maka di file userRouter.js, kita membuat grouping terhadap semua endpoint yang diawali dengan /user

// semua method, itu dia adalah function yang punya 2 parameter
//* Parameter pertama adalah endpoint
//* Parameter kedua adalah handler, handler sendiri adalah callback function yang punya 3 parameter (req, res, next)

userRouter.post("/", UserController.createUser);
userRouter.get("/:Id", UserController.getUserId);
userRouter.put("/:Id", UserController.putUserId);
userRouter.delete("/:Id", UserController.deleteUserId);

module.exports = { userRouter };
