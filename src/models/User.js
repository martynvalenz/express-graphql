import {Schema, model} from "mongoose";

const schema = new Schema({
  firstname:{type:String, required:true},
  lastname:{type:String, required:true},
  age:{type:Number},
});

export default model('User', schema, 'users');