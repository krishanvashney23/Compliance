import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import '@/styles/globals.css';
import '@/styles/navbar.css';
import '@/styles/login.css';
import '@/styles/profile.css';
import '@/styles/dashboard.css';
import '@/styles/credit.css';
import '@/styles/fiveTab.css';
import '@/styles/reportone.css';
import '@/styles/reportTwo.css';
import '@/styles/reportThree.css';
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
