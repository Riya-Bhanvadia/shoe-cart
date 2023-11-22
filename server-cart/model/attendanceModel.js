const mongoose = require("mongoose")
const schema = mongoose.Schema

const attendence = new schema({
    userId:{
        type: schema.Types.ObjectId,
        ref: 'user',
    },
    attend:[]
})

module.exports = mongoose.model("attendance", attendence)