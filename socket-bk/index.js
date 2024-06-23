// import { Server } from "socket.io";

// const io = new Server({
//   cors: {
//     origin: "http://localhost:9090",
//   },
// });

// let onlineUsers = [];

// const addNewUser = (userId, socketId) => {
//   !onlineUsers.some((user) => user.userId === userId) &&
//     onlineUsers.push({ userId, socketId });
// };

// const removeUser = (socketId) => {
//   onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
// };

// const getUser = (userId) => {
//   return onlineUsers.find((user) => user.userId === userId);
// };


// let cartProducts = [];

// const addProductTocart = (userId,productId,socketId) => {
//     cartProducts.push({userId,productId, socketId});
// }

// // const removeProduct = (socketId) => {
// //     onlineProducts = onlineProducts.filter((product)=> product.socketId != socketId)
// // };

// // const getProduct = (productCode) => {
// //     return onlineProducts.find((product) => product.productCode === productCode)
// // }


// io.on("connection", (socket) => {
//     // Other socket event handlers

//     socket.on("addNewUser", ({ userId, socketId }) => {
//         addNewUser(userId, socketId);
//     });

//     socket.on("addProductTocart", (userId,productId)=> {
//         addNewProduct(userId,productId, socket.id);
//     });

//     socket.on("sendNotification", ({ userName, productName}) => {
        
//         io.emit("getNotification", {
//             userName,
//             productName,
//         });
//       });
    
//     //   socket.on("sendText", ({ senderName, receiverName, text }) => {
//     //     const receiver = getUser(receiverName);
//     //     io.to(receiver.socketId).emit("getText", {
//     //       senderName,
//     //       text,
//     //     });
//     //   });
    
//     socket.on("disconnect", () => {
//         removeUser(socket.id);
//       });
    
    
// });



// io.listen(9001);