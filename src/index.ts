import app from "./app";
import connectToMongo from "./database/connectToMongo";

const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

connectToMongo();

export default server;