import { Quicksand } from 'next/font/google';


const quicksand = Quicksand({
    weight: '400',
    subsets: ['latin'],
    display:'swap',
})

export default function about(){
    return (
        <>
           <p className={`text-center ${quicksand.className}`}>
                Inspirado no projeto Pokenext do site Hora de Codar, 
                um site com algumas informações sobre professional wrestlers.
            </p>
        </>
    )
}