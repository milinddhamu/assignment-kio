import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from "@/components/Navbar"
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
