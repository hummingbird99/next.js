import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const delId = req.query._id;
    console.log("QUERY: " + delId);
    const db = (await connectDB).db("dang");
    try {
      await db.collection("post").deleteOne({ _id: new ObjectId(delId) });
      res.status(200).json({ message: "게시물을 삭제했습니다." });
    } catch (err) {
      console.error("delete error", err);
      res.status(500).json({ message: "게시물 삭제에 실패했습니다." });
    }
  }
}
