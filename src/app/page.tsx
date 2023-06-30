import Image from 'next/image'
import styles from './page.module.css'
import { Button } from 'trice-design-sytem-1'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>

        <Button label="Howdy doo" />
        
      </div>
    </main>
  )
}
