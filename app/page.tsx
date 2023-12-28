'use client'
import LoginModal from '@/components/LoginModal/LoginModal'
import styles from './page.module.css'
import { Modal } from '@/components'

export default function Home() {
  return (
    <main className={styles.main}>
     <h1 className='text-danger'>Hello Bootstrap</h1>
     <LoginModal />
    </main>
  )
}
