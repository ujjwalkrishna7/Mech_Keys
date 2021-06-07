import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@admin.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Ujjwal Krishna",
    email: "ujjwalkrishna7@gmail.com",
    password: bcrypt.hashSync("orange123", 10),
  },
  {
    name: "Kryz",
    email: "kryzofficial07@gmail.com",
    password: bcrypt.hashSync("orange123", 10),
  },
];

export default users;
