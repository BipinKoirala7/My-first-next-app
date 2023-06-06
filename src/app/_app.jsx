import "./global.css";
import RootLayout from "./layout";

function MyApp({ Component, pageProps }) {
  console.log('app rendered')
  return (
    <>
      <RootLayout>
        {/* <p>Bipin koirala</p>
        <Component {...pageProps} /> */}
      </RootLayout>
    </>
  );
}

export default MyApp;
