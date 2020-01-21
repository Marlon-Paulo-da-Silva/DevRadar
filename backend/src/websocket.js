const socketio = require("socket.io");
const parseStringAsArray = require("./utils/parseStringAsArray.js");

const connections = [];

exports.setupWebSocket = server => {
  const io = socketio(server);

  io.on("connection", socket => {
    const { latitude, longitude, techs } = socket.handshake.query;
    console.log(latitude, longitude, techs);

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude)
      },
      techs: parseStringAsArray(techs)
    });
  });
};
