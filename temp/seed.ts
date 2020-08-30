require("dotenv").config();

import { connectDatabase } from "./../src/database/index";
import { ObjectId } from "mongodb";
import { Listing } from "../src/lib/types";

const seed = async () => {
  try {
    console.log("[seed]: runninng...");
    const db = await connectDatabase();
    const listings: Listing[] = [
      {
        _id: new ObjectId(),
        title: "title 1",
        image:
          "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        address: "3210 Scot, valencia city",
        price: 1000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectId(),
        title: "title 2",
        image:
          "https://images.unsplash.com/photo-1585672652363-f4e6b7a0d951?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
        address: "3210 Scot, valencia city",
        price: 2000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 4,
      },
      {
        _id: new ObjectId(),
        title: "title 3",
        image:
          "https://images.unsplash.com/photo-1585675545282-e533759cf863?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
        address: "3210 Scot, valencia city",
        price: 3000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 3,
      },

      {
        _id: new ObjectId(),
        title: "title 4",
        image:
          "https://images.unsplash.com/photo-1585675545559-3b74c5999611?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        address: "3210 Scot, valencia city",
        price: 4000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 2,
      },
      {
        _id: new ObjectId(),
        title: "title 5",
        image:
          "https://images.unsplash.com/photo-1558980664-1db506751c6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        address: "3210 Scot, valencia city",
        price: 5000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 1,
      },
    ];
    for (const listing of listings) {
      await db.listings.insertOne(listing);
    }
    console.log("[seed]: Seeding success");
  } catch {
    throw new Error("failed to seed database");
  }
};

seed();
