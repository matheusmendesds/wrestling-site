import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Head from 'next/head'
export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>Wrestling-Info</title>
            </Head>
            <Navbar/>
            <main className="tela">{children}</main>
            <Footer/>
        </>
    )
}