import { Navbar } from '@/components/Navbar'

import { AppProps } from 'next/app'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <Navbar />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
