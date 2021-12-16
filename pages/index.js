// http://localhost:3000/
import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-12 mx-20">
        <h1>Hello Next.js</h1>
        <ul>
          <li>
            <Link href={`/news/${1}`}>Nextjs Article</Link>
          </li>
          <li>
            <Link href={`/news/${5}`}>
              Hellojs article (https://nextjs.org/learn/basics/hello-world)
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
