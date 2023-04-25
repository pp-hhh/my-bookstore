// const User = [
//   {
//     id: 1,
//     key: 1,
//     Name: {
//       fName: "Tom",
//       lName: "Cat",
//     },
//     Twitter: "@TomCat",
//     passwd: 123456,
//     avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
//     Notes: "This is a naughty cat.",
//   },
// ];
//
// export default User;

export const UserRole = [
    {
        value: 0,
        label: "User",
        children: []
    },
    {
        value: 1,
        label: "Admin",
        children: []
    },
];

export const defaultUser = {
    username: "",
    email: "",
    password: "",
    isMember: false,
    role: 0,
    avatar: "",
    notes: ""
}