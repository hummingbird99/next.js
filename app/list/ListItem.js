"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  const onRemove = async (id) => {
    try {
      const res = await fetch("/api/post/remove", {
        method: "POST",
        body: JSON.stringify(id),
      });
      const data = await res.json();
      if (res.status === 200) {
        console.log("Deleted data");
        alert(data.message);
      } else {
        console.error("Not found data");
        alert(data.message);
      }
    } catch (err) {
      console.error("Error deleting post", err);
    }

    console.log(id);
  };

  return (
    <div>
      {result.map((result, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${result._id}`}>
              <h4>{result.title}</h4>
            </Link>
            <Link href={`/edit/${result._id}`}>✏️</Link>
            <span onClick={() => onRemove(result._id)}>🗑️</span>
            <p>2023-04-25</p>
          </div>
        );
      })}
    </div>
  );
}
