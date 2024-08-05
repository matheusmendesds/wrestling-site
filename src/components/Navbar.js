import Link from "next/link"
import { Jaro } from 'next/font/google'

const jaro = Jaro({
    weight: '400',
    subsets: ['latin'],
    display:'swap',
})
export default function Navbar() {
    return (
        <nav>
            <div className={jaro.className}>
                <h1 className="text-4xl flex justify-center">Wrestling-Info</h1>
            </div>
            <ul className={`flex justify-center gap-3 ${jaro.className}`}>
                <li className="hover:bg-white text-2xl">
                    <Link href={"/"} legacyBehavior>Home</Link>
                </li>
                <li className="hover:bg-white text-2xl">
                    <Link href={"/about"} legacyBehavior>Sobre</Link>
                </li>
                <li className="hover:bg-white text-2xl">
                    <Link href={"/contato"} legacyBehavior>Contato</Link>
                </li>
            </ul>
        </nav>
    )
}
