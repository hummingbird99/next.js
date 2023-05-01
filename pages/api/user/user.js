import { connectDB } from "@/util/database";

export default async function User(req, res) {
  const db = (await connectDB).db("dang");

  if (req.method === "POST") {
    const { user_name, email, password } = req.body;

    try {
      await db.collection("user").insertOne({ user_name, email, password });
      return res.status(200).json({ message: "회원가입 완료" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "회원가입 실패" });
    }
  }
}
