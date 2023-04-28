import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const db = (await connectDB).db("dang");

  if (req.method === "POST") {
    const { title, price, description } = req.body;

    // 데이터 유효성 검사
    if (!title || !price || !description) {
      return res.status(400).json({ message: "입력 양식을 확인해주세요." });
    }

    // DB 게시글 저장
    try {
      await db.collection("post").insertOne({ title, price, description });
      res.status(200).json({ meassage: "게시물이 저장되었습니다." });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "게시물 저장에 실패했습니다." });
    }
  }
  return res.status(405).json({ meassage: "지원하지 않는 HTTP 메소드입니다." });
}
