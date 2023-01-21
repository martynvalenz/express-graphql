import {tasks} from './sample';
import User from './models/User';
export const resolvers = {
  Query:{
    hello: () => 'Hello world!',
    greet: (root, {name} /* args */, context, info) => {
      console.log(context)
      return `Hello ${name}!`;
    },
    tasks: () => tasks,
    users: async () => {
      return await User.find();
    }
  },
  Mutation:{
    createTask: (_, {input}) => {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },
    createUser: async (_, {input}) => {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
      // mutation {
      //   createUser(input:{
      //     firstname:"Martin",
      //     lastname:"Valenzuela",
      //     age:36
      //   }){
      //     _id
      //     firstname
      //     lastname
      //     age
      //   }
      // }
    },
    deleteUser: async (_, {_id}) => {
      return await User.findByIdAndDelete(_id);
      // mutation {
      //   deleteUser(_id:"63cc406d6f917df9d9f3c0d6"){
      //     _id
      //     firstname
      //   }
      // }
    },

    updateUser: async (_, {_id, input}) => {
      const user = await User.findByIdAndUpdate(_id, input, {new:true});
      return user;
      // mutation {
      //   updateUser(_id:"63cc463b4e23753c602888d0",input:{
      //     firstname:"Martiner"
      //     lastname: "Valenz"
      //     age:37
      //   }){
      //     _id
      //     firstname
      //     lastname
      //     age
      //   }
      // }
    }
  }
};