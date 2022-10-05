  import Link from "next/link"
  import Pagina2 from "./pagina2"
  import Pagina3 from "./pagina3"

export default function Header() {
    return (
      <>
         <p>Menu</p><br></br>
         <Link href= "./pagina2">
          <a>Ir para página 2</a>
         </Link><br></br>

         <Link href= "./pagina3">
          <a>Ir para página 3</a>
         </Link><br></br>

         <Link href= "./index">
          <a>Voltar para a página inicial</a>
         </Link><br></br>
         
      </>
    )
}