import Link from "next/link"
import Layout from "../components/layout"

const Pagina404 = () => {
  return (
    <Layout
        title={`Página no encontrada`}
        description={'Error'}
    >
        <p className="error"> Página no encontrada</p>
        <Link href='/' className="error-enlace">Ir a inicio </Link>
    </Layout>
  )
}

export default Pagina404
