//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
  import Link from "next/link"
  import Header from "./header"
  import Footer from "./footer"

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
