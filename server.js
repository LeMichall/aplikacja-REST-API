import app from "./app.js";

import { connectDb } from "./db.js";

const startServer = async () => {
  try {
    await connectDb();
    app.listen(3000, async () => {
      console.log("Server running. Use our API on port: 3000");
    });
  } catch (err) {
    console.error(err.message);
  }
};
startServer();
