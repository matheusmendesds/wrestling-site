import Image from "next/image"
import Link from "next/link"
import github from "@/src/images/github.png"
import ig from "@/src/images/ig.png"
import lk from "@/src/images/linkedin.png"

export default function Contato(){
    return (
        <div>
            <p className="flex justify-center content-center">
                <Link href="https://github.com/matheusmendesds" target="_blank"><Image src={github} alt="github" width={50}/></Link>
                <Link href="https://www.instagram.com/mendesmatheus30/" target="_blank"><Image src={ig} alt="instagram" width={50}/></Link>
                <Link href="https://www.linkedin.com/in/matheus-mendes-13b548192/" target="_blank"><Image src={lk} alt="linkedin" width={50}/></Link>
                
            </p>
        </div>
    )
}