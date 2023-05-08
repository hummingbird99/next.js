import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const id = JSON.parse(req.body);
    console.log(req.body);
    const db = (await connectDB).db("dang");
    let result;
    try {
      result = await db.collection("post").deleteOne({ _id: new ObjectId(id) });
      console.log(result);
    } catch (err) {
      console.error("delete error", err);
      res.status(500).json({ message: "게시물 삭제에 실패했습니다." });
    }
    if (result.deletedCount === 1) {
      res.status(200).json({
        success: true,
        message: "게시물을 삭제했습니다.",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "게시물을 찾을 수 없습니다.",
      });
    }
  }
}
