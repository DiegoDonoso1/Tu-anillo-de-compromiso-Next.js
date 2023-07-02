import React from 'react';
import styles from './page.module.css'

export default function Faq () {
    return <>
    <main>
  <div className={styles.pr_container}>
    <div className={styles.pr_acord_container}>
      <input className={styles.pr_input} type="checkbox" id="Titulo1" />
      <label className={styles.pr_label} htmlFor="Titulo1">Pregunta 1</label>
      <div className={styles.Contenido_Acordeon}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Fugiat quo ex, cupiditate molestias fugit eligendi dolor 
          aspernatur ullam impedit at, possimus eum iure aut similique
          ipsa non illum ut? Dolore.</p>
      </div>
    </div>
    <div className={styles.pr_acord_container}>
      <input className={styles.pr_input} type="checkbox" id="Titulo2" />
      <label className={styles.pr_label} htmlFor="Titulo2">Pregunta 2</label>
      <div className={styles.Contenido_Acordeon}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Fugiat quo ex, cupiditate molestias fugit eligendi dolor 
          aspernatur ullam impedit at, possimus eum iure aut similique
          ipsa non illum ut? Dolore.</p>
      </div>
    </div>
    <div className={styles.pr_acord_container}>
      <input className={styles.pr_input} type="checkbox" id="Titulo3" />
      <label className={styles.pr_label} htmlFor="Titulo3">Pregunta 3</label>
      <div className={styles.Contenido_Acordeon}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Fugiat quo ex, cupiditate molestias fugit eligendi dolor 
          aspernatur ullam impedit at, possimus eum iure aut similique
          ipsa non illum ut? Dolore.</p>
      </div>
    </div>
    <div className={styles.pr_acord_container}>
      <input className={styles.pr_input} type="checkbox" id="Titulo4" />
      <label className={styles.pr_label} htmlFor="Titulo4">Pregunta 4</label>
      <div className={styles.Contenido_Acordeon}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Fugiat quo ex, cupiditate molestias fugit eligendi dolor 
          aspernatur ullam impedit at, possimus eum iure aut similique
          ipsa non illum ut? Dolore.</p>
      </div>
    </div>
    <div className={styles.pr_acord_container}>
      <input className={styles.pr_input} type="checkbox" id="Titulo5" />
      <label className={styles.pr_label} htmlFor="Titulo5">Pregunta 5</label>
      <div className={styles.Contenido_Acordeon}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Fugiat quo ex, cupiditate molestias fugit eligendi dolor 
          aspernatur ullam impedit at, possimus eum iure aut similique
          ipsa non illum ut? Dolore.</p>
      </div>
    </div>
  </div>
</main>
        
    </>
}
