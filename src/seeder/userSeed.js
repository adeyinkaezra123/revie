const bcrypt = require("bcrypt");

const password = "password12";
const hash = bcrypt.hashSync(password, 10);

const User = {
  model: "user",
  documents: [
    {
      _id: "6186e80aa8a6d3abae02d434",
      username: "elonpluto",
      email: "elon@musk.com",
      password: "$2b$10$SsppLOJjHYqlemaHoN6G1.qG3xzWCKvWwOyS.kotUaIWLDnY72LYy",
      createdAt: "2021-11-06T20:39:38.502Z",
      updatedAt: "2021-11-06T21:26:25.182Z",
      firstName: "Elon",
      lastName: "Musk",
      phone: "+123456789",
      Photo: "https://res.cloudinary.com/obioflagos/image/upload/v1636232913/az4buhqn0bqci4zpls2e.jpg"
    }

  ],
};
route
module.exports = User;
