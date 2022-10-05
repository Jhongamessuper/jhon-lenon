import Link from "next/link"
import Pag2 from "./pagina2"
export default function Header() {
    return (
      <>
         <p>Menu</p><br></br>
         <Link href= "./pagina2">
          <a>Ir para página 2</a>
         </Link>

         <p>Menu</p><br></br>
         <Link href= "./pagina3">
          <a>Ir para página 2</a>
         </Link>

         <p>Menu</p><br></br>
         <Link href= "">
          <a>Voltar para a página inicial</a>
         </Link>
         
      </>
    )
}

export default function Footer() {
  return (
    <>
        <p></p>
    </>
  )
}