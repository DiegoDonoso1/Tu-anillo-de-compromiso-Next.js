import React from 'react';
import styles from './sizeguide.module.css'
import Cinta from '../components/cinta';
import Link from 'next/link';
import Image from 'next/image';


export default function page() {
	return (
        <>
        <Cinta />
		<main className={styles.main}>
        <section>
            <div className= {styles.contenedor_cuerpo_guia}>
    <div className={styles.titulo_talla_correcta}>
        <h2>¿Cómo sé cuál es la talla correcta?</h2>
    </div>
    <div className={styles.contenedor_guia_tallas}>
        <Image className={styles.imagen_banner} src="/img/cinta-anillos2.jpg" width={350} height={400} alt="" />
        <div className={styles.cuerpo_guia}>
        <p>
          Es esencial asegurarse de que el anillo tenga el tamaño adecuado para ese momento especial, debe
          ajustarse lo suficiente como para no caerse, pero también permitir que se deslice por el dedo
          sin dificultad.
          La hora del día y las condiciones climáticas pueden afectar la medición, la noche es el momento
          óptimo para medir el tamaño del dedo, si estás indeciso entre dos tamaños, es mejor elegir el
          más grande.
          Si el anillo será una sorpresa, puedes pedir ayuda a un amigo o miembro de la familia, o acudir
          a un joyero para determinar el tamaño.
          Recuerda que los tamaños de los dedos pueden variar entre la mano derecha y la izquierda.
        </p>
      </div>
    </div>
    <section>
      <div className={styles.contenedor_nuestros_tips}>
        <div className={styles.titulo_talla_correcta}>
          <h2>Nuestros tips</h2>
        </div>
        <div className={styles.contenedor_tips_tallas}>
          <div className={styles.cuerpo_guia2}>
            <div className={styles.boton_video}>
              <p>
                La mejor forma de identificar la talla de tu dedo si no tienes a disposición una
                herramienta especial para esto, es medir el diámetro de tu dedo. <br/><br/>
                ♥ Diámetro del dedo: Necesitas un anillo que sea de tu talla. Debes medir el
                interior del anillo desde las partes más anchas, por la mitad, de un extremo a otro.
                ¡<Link href="https://www.instagram.com/reel/CRzRBQXADAA/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="> AQUÍ
                </Link>  te enseñamos cómo!
                <br /><br />
              </p>
            </div>
          </div>
          <Image className={styles.imagen_banner2} src="/img/primer-plano-cinta-metrica.jpg" width={350} height={400} alt="" />
        </div>
      </div>
    </section>
    <section>
      <div className={styles.titulo_talla_correcta}>
        <h2>Nuestra tabla de tallas</h2>
      </div>
      <div className={styles.contenedor_tablas}>
        <div className={styles.tabla1_img}> <Image src="/img/tabla-talla10.png
      " width={450} height={850} /></div>
        <div className={styles.tabla2_img}> <Image src="/img/tabla-talla20.png" alt="" width={450} height={850} /></div>
      </div>
    </section>
    </div>
</section>

		</main>
        </>
	);
}

Cinta.defaultProps ={
    titulo_pagina: 'GUÍA DE TALLAS',
    boton_volver: 'Volver a la tienda'
}
