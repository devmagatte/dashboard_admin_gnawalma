import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'
class MyDocument extends Document {

    render() {
        return (
            <Html lang="en" className="h-100">
                <Head>
                    <link rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/vendor/bootstrap-select/css/bootstrap-select.min.css" />
                    <link rel="stylesheet" href="/css/style.css" />
                </Head>
                <body className="h-100">
                    <Main />
                    <NextScript />
                    <Script src="/vendor/jquery/jquery.min.js" strategy="afterInteractive"></Script>
                    <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive"></Script>
                    <Script src="/vendor/bootstrap-select/js/bootstrap-select.min.js" strategy="afterInteractive"></Script>
                    <Script src="/vendor/global/global.min.js" strategy="afterInteractive"></Script>
                    <Script src="/vendor/chart-js/chart.bundle.min.js" strategy="afterInteractive"></Script>
                    <Script src="/vendor/apexchart/apexchart.js" strategy="afterInteractive"></Script>
                    <Script src="/vendor/owl-carousel/owl.carousel.js" strategy="afterInteractive"></Script>
                    <Script src="/vendor/peity/jquery.peity.min.js" strategy="afterInteractive"></Script>
                    <Script src="/js/dashboard/dashboard-1.js" strategy="afterInteractive"></Script>
                    <Script src="/js/custom.min.js" strategy="afterInteractive"></Script>
                    <Script src="/js/deznav-init.js" strategy="afterInteractive"></Script>
                   
                </body>
            </Html>
        );
    }
}

export default MyDocument;
