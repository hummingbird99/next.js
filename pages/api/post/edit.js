import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, price, description } = req.body;
    let editPost = { title, price, description };
    const db = (await connectDB).db("dang");
    await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: editPost });
    res.redirect(302, "/list");
  }
}
