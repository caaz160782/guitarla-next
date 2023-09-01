import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

const Nosotros = () => {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros, guitarLA, tienda de música'}
    >
       <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit quam nec nulla fringilla, at bibendum ante semper. 
                Aenean vestibulum diam sit amet purus ornare suscipit. Morbi massa risus, hendrerit sit amet rhoncus sit amet, eleifend et eros.
                Sed posuere vehicula consequat. Nunc in neque justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Suspendisse non dui odio.
              </p>
              <p>
                Phasellus tristique ultrices odio, sed ornare justo fermentum a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi quis ex vehicula, elementum justo non, tincidunt metus. Nullam ullamcorper vel mauris ac tempor.
                Curabitur fringilla eget ex at iaculis. Nunc velit arcu, facilisis nec libero vel, placerat maximus felis. 
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.                
              </p>
            </div>
          </div>
       </main>
    </Layout>
  )
}

export default Nosotros
