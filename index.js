const express = require("express");
const app = express();

// to read all the post data, this middleware should be present
app.use(express.urlencoded({ extended: true }));

// make every request/response data as json data
app.use(express.json())

// routers
const userRouter = require("./routers/index.router");

// set global middleware
app.use(logger);

// express basic url
app.get("/", (req, res)=>{
    console.log("get");
    res.status(200).json({ message: "Hi" });
    // res.render("html file name and data to send on file")
})

// express router
app.use("/user", userRouter);

// middleware function
function logger(req, res, next){
    console.log("Request.");
    next();
}

// server listen
app.listen(3000, ()=>{
    console.log("Server started.")
});