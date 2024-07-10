import Link from "next/link";
import { handleSubmit } from "../../../actions/serverActions";
import { useFormStatus } from "react-dom";

export const metadata = {
  title: "Posts",
  description: "This is a Posts Page",
};

export interface ICategory {
  slug: string;
  name: string;
  url: string;
}

export default async function Posts() {
  //const { pending } = useFormStatus(); only work in Client component

  const response = await fetch("https://dummyjson.com/products/categories", {
    next: {
      tags: ["products"],
    },
  });
  const categories: ICategory[] = await response.json();

  return (
    <>
      <h1>Posts Page</h1>
      <Link href="/">Home Page</Link>
      <br />
      <br />
      <form action={handleSubmit}>
        <input
          type="text"
          name="title"
          className="border border-gray-300 rounded-md p-2"
          placeholder="Title"
        />
        <button
          //disabled={pending}
          className="border bg-blue-500 text-white rounded-md p-2"
        >
          Add Post
        </button>
      </form>
      <br />
      <br />
      <br />
      <br />
      <ul>
        {categories.map((category) => (
          <li key={category.name}>{category.name}</li>
        ))}
      </ul>
      <br />
    </>
  );
}
