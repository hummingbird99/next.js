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
      <form action="/api/post/edit" method="POST">
        <input name="title" placeholder="상품명" defaultValue={result.title} />
        <input name="price" placeholder="가격" defaultValue={result.price} />
        <input
          name="description"
          placeholder="상품설명"
          defaultValue={result.description}
        />
        <input
          style={{ display: "none" }}
          name="_id"
          placeholder="가격"
          defaultValue={result._id.toString()}
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}
