"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((result, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${result._id}`}>
              <h4>{result.title}</h4>
            </Link>
            <Link href={`/edit/${result._id}`}>✏️</Link>
            <span
              onClick={async () => {
                const id = result._id.toString();
                await fetch(`/api/post/remove/${id}`, {
                  method: "DELETE",
                })
                  .then((res, err) => {
                    if (res.status === 204) {
                      console.log("Client: Deleted post");
                    } else {
                      console.error("Failed deleting post", err);
                    }
                  })
                  .catch((err) => console.error("Error deleting post", err));
                console.log(result._id);
              }}
            >
              🗑️
            </span>
            <p>2023-04-25</p>
          </div>
        );
      })}
    </div>
  );
}
