import { connectDB } from "@/util/database";

export default async function Home() {
  const db = (await connectDB).db("dang");
  let result = await db.collection("post").find().toArray();

  return <div>Hi</div>;
}
