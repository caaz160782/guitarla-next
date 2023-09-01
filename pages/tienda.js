import Layout from "../components/layout"
import ListadoGuitarras from "../components/listado-guitarras"


const Tienda = () => {
  return (
    <Layout
    title={'Tienda virtual'}
    description={'Tienda virtual de guitarras, instrumentos, GuitarLA'}
  >
    <main className="contenedor">
      <h2 className="heading">Nuestra Colección</h2>

      <ListadoGuitarras
        
      />
    </main>
  </Layout>
  )
}

export default Tienda