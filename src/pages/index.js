import Image from 'next/image'
import { Quicksand, Jaro} from 'next/font/google'
import Card from "@/src/components/Card/Card";
import api from './api/api';

const quicksand = Quicksand({
  weight: '400',
  subsets: ['latin'],
  display:'swap',
})

const jaro = Jaro({
  weight: '400',
  subsets: ['latin'],
  display:'swap',
})



  
export async function getServerSideProps() {
  
  try {
    const response = await api.get('/wrestlers');
    const dados = response.data
    
    return {props: {dados}};
  } catch (err) {
    console.error(err);
    throw new Error('Erro ao buscar dados da API')
  }
}

const Index = ({dados}) => (
  <>
        {dados.map(wrestler => (
          <div className={`container ${quicksand.className}`}  key={wrestler.id}>
            <Image src={`/${wrestler.id}.jpg`} width='150' height='150' alt={`${wrestler.name}`} className='m-auto p-1'/>
            <Card
              cardname={wrestler.name}
              cardstyle={wrestler.style}
              cardcompany={wrestler.company}
              cardgender={wrestler.sex}
            />
          </div>
        ))};
    </>
);

export default Index;

