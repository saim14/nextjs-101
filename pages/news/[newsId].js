// http://localhost:3000/news/[newsId]
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

export default function NewsDetails() {
  const router = useRouter();
  const { newsId } = router.query;
  return (
    <>
      <Head>
        <title>News {newsId}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        <Link href="/">Back to home</Link>
      </p>
      <p>News Details of {newsId}</p>
    </>
  );
}
