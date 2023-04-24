const express = require("express");
const app = express();
const cors = require("cors");
const { default: axios } = require("axios");

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const resp = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username,
        secret: username,
        first_name: username,
      },
      {
        headers: { "private-key": "e277334d-4626-4bcc-bb13-6fb64faab4ad" },
      }
    );
    return res.status(resp.status).json(resp.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001, () => {
  console.log("server is running");
});
