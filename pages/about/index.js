import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <main>
        <p>This is the old about section</p>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </div>
  )
}
