import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("dang");
  let result = await db.collection("post").find().toArray();
  console.log(result[0]);

  return (
    <div className="list-bg">
      {result.map((result, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${result._id}`}>
              <h4>{result.title}</h4>
            </Link>
            <p>2023-04-25</p>
          </div>
        );
      })}
    </div>
  );
}
