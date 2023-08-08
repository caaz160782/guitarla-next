import Link from "next/link"
import Layout from "../components/layout"

const Nosotros = () => {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros, guitarLA, tienda de música'}
    >
        <Link href="/">Inicio</Link>
    </Layout>
  )
}

export default Nosotros
