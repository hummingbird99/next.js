"use client";

import { useRouter } from "next/navigation";

export default function DetailLink({ result }) {
  let router = useRouter();
  return (
    <button
      onClick={() => {
        router.prefetch(`/detail/${result._id}`);
      }}
    >
      Click
    </button>
  );
}
