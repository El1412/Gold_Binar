const express = require("express");
const { userRouter } = require("./routes/userRouter");
const app = express();
const PORT = 3000;
app.use(express.json());

//* Grouping endpoint dengan prefix /user
app.use("/user", userRouter);

app.listen(PORT, () => console.log("Server running on PORT", PORT));
