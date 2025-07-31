// Create schema & model
const { default: mongoose } = require('mongoose')
const momgoose = require('mongoose')
const { type } = require('os')

const todoSchema = momgoose.Schema({
  title:{
    type : String,
    require : true,
    trim : true //  ลบช่องว่าง
  },
  description : {
    type : String ,
    default : " ", // ค่าเริ่มต้นเป็นช่องว่าง
    trim : true 
  },
  complete : {
    type : Boolean ,
    default : false ,
  },
  createAt : {
    type : Date ,
    default: Date.now
  }
})

// Create model
const Todo = mongoose.model("model",todoSchema)
module.exports = Todo