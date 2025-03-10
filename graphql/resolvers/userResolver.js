const User = require("../../models/User");

const userResolver = {
  Query: {
    getUsers: async () => await User.find(),
    getUser: async (_, { id }) => await User.findById(id),
  },
  Mutation: {
    createUser: async (_, { name, email, age }) => {
      const user = new User({ name, email, age });
      await user.save();
      return user;
    },
    deleteUser: async (_, { id }) => {
      await User.findByIdAndDelete(id);
      return "User deleted successfully";
    },
  },
};

module.exports = userResolver;
