import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("dang");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.product_id) });
  console.log(result);

  return (
    <div className="product_post">
      <h4>수정 페이지</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="상품명" value={result.title} />
        <input name="price" placeholder="가격" value={result.price} />
        <input
          name="description"
          placeholder="상품설명"
          value={result.description}
        />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
