import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'
class MyDocument extends Document {

    render() {
        return (
            <Html lang="en" className="h-100">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="UTF-8" />
                    <link rel="shortcut icon" href="/assets/img/paygo/flatpaygo.png" type="image/x-icon" />
                    <title>Gnawalma Pro</title>
                    <link rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/vendor/bootstrap-select/css/bootstrap-select.min.css" />
                    <link rel="stylesheet" href="/css/style.css" />
                </Head>
                <body className="h-100">
                    <Main />
                    <NextScript />
                    
                </body>
            </Html>
        );
    }
}

export default MyDocument;
