import './globals.css'
import Provider from '@/components/Provider'
import { Navbar } from '@/components/Navbar'

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className='min-h-screen mx-auto max-w-6xl flex flex-col bg-white dark:bg-gray-900'>
                <Provider>
                    <Navbar />
                    <main className='flex flex-col flex-1 max-w-6xl w-full  '>
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}