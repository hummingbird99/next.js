import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const id = JSON.parse(req.body);
    console.log(req.body);
    const db = (await connectDB).db("dang");
    try {
      await db.collection("post").deleteOne({ _id: new ObjectId(id) });
      res.status(200).json({ message: "게시물을 삭제했습니다." });
    } catch (err) {
      console.error("delete error", err);
      res.status(500).json({ message: "게시물 삭제에 실패했습니다." });
    }
  }
}
