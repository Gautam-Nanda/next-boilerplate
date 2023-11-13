import { AuthProvider } from '@/context/authContext';
import { getUserFromSession } from '@/context/authContext';
import { ChakraProvider } from '@chakra-ui/react'
import App from 'next/app'
import '../styles/root/_global.scss'

function MyApp({ Component, pageProps, user }) {
  return (
      <AuthProvider ssrUser={user}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  if (appContext.router.isSsr === undefined) {
    const appProps = await App.getInitialProps(appContext);
    const user = await getUserFromSession(appContext.ctx);
    return { ...appProps, user: user };
  } else {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  }
}

export default MyApp;
