import { listings } from "./listings";
import express from "express";

const app = express();
const port = 9000;

const one = 1;
const two = 2;

app.use(express.json());

app.get("/", (_req, res) => res.send(`yep!, ${one + two}`));

// listings route
app.get("/listings", (_, res) => {
  return res.send(listings);
});

app.post("/delete-listings", (req, res) => {
  const id: string = req.body.id;
  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return res.status(200).send(listings.splice(i, 1));
    }
  }
  return res.status(404).send("failed to delete listing");
});

app.listen(port, () => console.log(`App listening to: ${port}`));
