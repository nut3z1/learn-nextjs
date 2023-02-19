import { useRouter } from 'next/router';
import Images1 from '../../assets/tab1.png';
import Image from 'next/image'

export default function index() {
    // const router = useRouter()
  return (
    <div>
      <h2></h2>
      <img src={Images1.src} width='100%' height='100%' />
    </div>
  )
}
