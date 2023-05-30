import Image from 'next/image'
import styles from './page.module.css'
import MenuBar from '../components/MenuBar';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className={styles.main}>
    <MenuBar />
 
      <Contact url={"https://placehold.co/500x600"} />

    </main>
  )
}
