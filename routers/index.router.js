const express = require("express");
const router = express.Router();

// static router which is similar to dynamic route
// must be on top of dunamic router.

// Request Methods
// get, post, put, delete

// chaining like url
// router
//     .route("chain_like")
//     .get()
//     .post()
//     .put()
//     .delete()

router.get("/", (req, res)=>{
    res.status(200).json({ message: "Hi, User" });
});

// dynamic url
router.get("/:id", preRequest, (req, res) => {
    res.status(200).send(req.params.id);
});

// process param (middleware)
router.param("id", (req, res, next, id) => {
    console.log(id);
    next();
})

// specific middleware example function
function preRequest(req, res, next){
    console.log("Pre Request.")
    next();
}

module.exports = router;