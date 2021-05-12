import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link async rel="preconnect" href="https://fonts.gstatic.com" />
          <link async rel="preconnect" href="https://fonts.googleapis.com/css2?family=Palanquin:wght@100&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,400;0,500;1,600;1,700;1,800;1,900;0,900&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main /> 
          <NextScript />
          <script type="text/javascript" src="/static/widgets.js" defer></script>
          <script type="text/javascript" src="/static/facebook.js" defer></script>
          <script type="text/javascript" src="/static/Lazysizes.js" defer></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument