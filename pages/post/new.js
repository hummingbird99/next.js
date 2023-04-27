import { connectDB } from "@/util/database";

export default async function handler(request, response) {
  if (request.method == "POST") {
    const db = (await connectDB).db("dang");
    let result = await db.collection("post").insertOne(request.body);
    console.log(request.body);
    return response.status(200).json("Complete");
  }
}
