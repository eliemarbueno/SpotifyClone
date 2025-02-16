import { MongoClient } from "mongodb";

// const URI =
//  "mongodb+srv://fullstackjornada:qojI71xVU2aV8UKC@cluster0.v1qra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const URI =
  "mongodb+srv://validationTestEb:gdi3wNRcZ2BxgKsS@myfreecluster.rxnb5.mongodb.net/?retryWrites=true&w=majority&appName=MyFreeCluster";

// mongodb+srv://myfreecluster.rxnb5.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&appName=MyFreeCluster

const client = new MongoClient(URI);

export const db = client.db("spotifyClone");
// const mySimpleTestCollection = await db
//   .collection("artists")
//   .find({})
//   .toArray();

// console.log(mySimpleTestCollection);
