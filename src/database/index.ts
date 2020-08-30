import { Database } from "./../lib/types";
import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db("tinyhouse");
  return {
    listings: db.collection("test_listings"),
  };
};
