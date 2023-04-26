import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = (await connectDB).db("dang");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.product_id) });
  console.log(props.params.product_id);
  return (
    <div>
      <h3>상세페이지</h3>
      <h4>{result.title}</h4>
      <h4>{result.price}</h4>
      <p>{result.description}</p>
    </div>
  );
}
