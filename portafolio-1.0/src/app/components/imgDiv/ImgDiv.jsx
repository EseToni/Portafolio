import React from 'react'
import styles from "./styles.module.css"

const ImgDiv = () => {
  return (
    <div className={styles.circleDiv}>
      <img src='/fotoperfil/FotoPerfilNoFondo.png' alt="Foto de perfil" className={styles.img} />
    </div>
  )
}

export default ImgDiv