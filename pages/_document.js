import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charset="utf-8"/>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes"/>

            <meta name="language" content="en"/>
            <meta name="author" content="Mikhaël Bailly"/>
            <meta name="category" content="website, portfolio"/>
            <meta name="theme-color" content="#1971c2"/>

            <meta name="description" content="Mikhaël Bailly - Site Français d'actualités High-Tech" />

            <meta property="og:type" content="website"/>
            <meta property="og:locale" content="en" />
            <meta property="og:url" content="https://www.mikhaelbailly.com/"/>
            <meta property="og:keywords" content="website, portfolio" />
            <meta property="og:site_name" content="Mikhaël Bailly" />
            <meta property="og:description" content="Mikhaël Bailly - Site Français d'actualités High-Tech" />
            <meta property="og:image" content="https://www.mikhaelbailly.com/images/o/account_banner.jpg"/>
            <meta property="og:image:width" content="672"/>
            <meta property="og:image:height" content="350"/>

            <link rel="apple-touch-icon" sizes="57x57" href="images/favicons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="images/favicons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="images/favicons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="images/favicons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="images/favicons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="images/favicons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="images/favicons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="images/favicons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="images/favicons/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="images/favicons/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="images/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="images/favicons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="images/favicons/favicon-16x16.png" />
            <link rel="icon" href="images/favicons/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
