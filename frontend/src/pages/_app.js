import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import BootstrapJSLoader from '@/components/BootstrapJsLoader';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BootstrapJSLoader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
