const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();

const port = process.env.PORT || 9000
console.log("LISTEN TO: ",port);
const server = app.listen(port);

const peerServer = ExpressPeerServer(server, {
	path: "/",
	allow_discovery:true
});

app.use("/", peerServer);
