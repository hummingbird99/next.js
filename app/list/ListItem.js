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
              onClick={() => {
                fetch(`/api/post/delete/${result._id}`, {
                  method: "DELETE",
                })
                  .then(() => console.log("Deleted post"))
                  .catch((err) => console.error("Error deleting post"));
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
