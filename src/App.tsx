import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import "./styles/global.css";
import express from "express";

function App() {

  const app = express();
  app.use(express.static("src/assets"));
  app.get("/imagem", (req, res) => {
    
    const password = req.query.password;
    const imageName = req.query.name;

    if (password === process.env.PASS) {
      res.sendFile(`${__dirname}/assets/${imageName}`);
    } else {
      res.status(403).send("Forbidden");
    }
  });

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;