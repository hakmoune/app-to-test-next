"use server";

import { revalidateTag } from "next/cache";

// "e: FormData" is expected to be an instance of FormData directly
// "action" in the form take a function that take in the param the formData
// we use "action" instead of "onSubmit" because we are in the server not in client where need submit data
export const handleSubmit = async (formData: FormData) => {
  const title = formData.get("title")?.toString();

  if (!title) return;

  const res = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
    }),
  });

  const data = await res.json();
  console.log(data);

  revalidateTag("products");
};
