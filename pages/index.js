//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
//import Link from "next/link"
  import Header from "./header"
  import Footer from "./footer"

export default function Home() {
  return (
    <>
    {/*<h1>Hello World!</h1>
    <hr/>
    <Link href="http://www.google.com.br">GOOGLE</Link>*/}
    <Header />
    <hr />
    <p>Os gregos consideravam Zeus o deus supremo e comandante do Universo. Era o deus dos céus, do raio e do trovão. Era considerado pai dos homens e dos deuses. Resgatou seus irmãos, devorados por seu próprio pai, Cronos.</p><br></br>
    <img src="maxresdefault.jpg"></img>
    <Footer />

    </>

  )
}
