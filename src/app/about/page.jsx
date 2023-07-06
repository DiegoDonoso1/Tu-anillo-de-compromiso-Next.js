import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
	return (
		
	<div className= {styles.sobre_nosotros}>
	  <div className={styles.texto}>
		<Image src="/img/anillo 1.jpg" alt="imagen 1" width={280} height={280}
		 className={styles.izquierda} />
		
		<p className={styles.parrafo}> Nuestro emprendimiento es como una hermosa relación entre madre e hija, surgido de la necesidad apremiante de centrarnos en nuestro primer negocio: la maravillosa creación de joyas de plata. Así es como nació con amor y dedicación "Tu
		  anillo de compromiso Chile". Y no nos quedamos ahí, pues en nuestros sueños se vislumbra la apertura de una joyería física en un futuro cercano, sin perder de vista nuestra esencia online. Queremos estar presentes en todos los rincones
		  posibles, brindando nuestro encanto y estilo a aquellos que nos elijan. Porque para nosotras, cada joya es una obra de arte, cargada de significado y emoción, lista para acompañar momentos inolvidables en la vida de las personas.</p>
	  </div>
	  <div className={styles.texto2}>
		<p className={styles.parrafo}>En nuestro enfoque, creemos firmemente que la celebración de una nueva etapa no debe ser un lujo exclusivo. Nos esforzamos por hacer que nuestras opciones sean accesibles para todos, sin importar su situación económica. Trabajamos arduamente
		  para ofrecer productos y servicios de alta calidad a precios asequibles, y creemos en la importancia de brindar a las personas la oportunidad de disfrutar y celebrar momentos especiales sin preocupaciones financieras.</p>
		<Image src="/img/pexels-photomix-company-94843 1.jpg" alt="imagen 2" width={280} height={280} className={styles.derecha} />
	  </div>
	</div>
	);
}
