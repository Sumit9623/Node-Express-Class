

// user Schema
const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
    firstName:{type:String, required:true},
    lastName:String,
    email:{
        type:String,
        unique: true,
        validate: {
            validator: function (v) {
              return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid email!`,
          },
        required:true,
    },
    password: {type:String,minlength:6,required:true},
    token:String,
    Cart:[{type: Schema.Types.ObjectId,ref:'product'}]
});
exports.user = mongoose.model('user',userSchema);