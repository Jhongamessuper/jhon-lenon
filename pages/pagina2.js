//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
  import Menu from "next/link"
  import Header from "./globals"
  import Footer from "./globals"

export default function Pagina2() {
  return (
    <>
      <Header />
            <div>
                <hr />
                <label>Nome:</label>
                <input type="text" />
                    <button>Clique aqui</button>
                <hr />
            </div>
        <Footer />
    </>
    
  )
}
