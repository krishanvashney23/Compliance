// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Bootstrap CSS */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeGz6I/0hg4X0g1cz5ubI7oUfttij"
            crossOrigin="anonymous"
          />
          {/* Bootstrap Icons */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
            integrity="sha384-5A4Ktgi0N1l5GqgHr6D5R3M5zF0ZouT1W+udPbN7izTCYgK8Vn6Er5Z25roxlA4f"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* jQuery */}
          <script
            src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"
            integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl5/IO2hP8B5Q2MRZw/cpXTFmnsjM0sd07tBJpZ/7V"
            crossOrigin="anonymous"
          ></script>
          {/* Popper.js */}
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldSRuYz4qRTF5WvOfd3wEkI6+V6cAfaP5KxDSap"
            crossOrigin="anonymous"
          ></script>
          {/* Bootstrap JS */}
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pzjw8f+ua7Kw1TIqKw1T9hFVb2PwrAP7K5G2OGNsbGbDLfuEEp50HEjH3PHvqSWk"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;