import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="h-[110vh] bg-beige-500 selection:bg-gray-500 selection:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
