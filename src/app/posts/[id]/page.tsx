import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  params: {
    id: string;
  };
}

export function generateMetadata({ params: { id } }: Params) {
  return {
    title: `Post ${id}`,
    description: `This is post ${id}`,
  };
}

export default function Post({ params: { id } }: Params) {
  if (id === "4") notFound();

  return (
    <>
      <h1>Post {id}</h1>
      <br />
      <Link href="/">Return To Home Page</Link>
    </>
  );
}
