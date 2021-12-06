import type { AppProps } from 'next/app';
import '../style/globalStyle.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            {/* <DarkModeProvider> */}
            {/*<Wrapper> */}
            <Component {...pageProps} />
            {/* </Wrapper> */}
            {/* </DarkModeProvider> */}
        </>
    );
};

export default MyApp;
