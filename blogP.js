const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title:String,
    content:String
})

module.exports = {
    posts:mongoose.model("Post",postSchema)
}
