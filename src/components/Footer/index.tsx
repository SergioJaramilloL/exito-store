import styles from './footer.module.scss';

import Image from 'next/image';

const visitAlso = [
  {id:1, img: 'carulla', width: 50, height: 30},
  {id:2, img: 'viva', width: 30, height: 30},
  {id:3, img: 'superinter', width: 50, height: 30},
  {id:4, img: 'surtimax', width: 55, height: 30}
]

export default function Footer(): JSX.Element {
  return(
    <footer className={styles.footer}>
      <div className={styles.footer_left}>
        <p>Visita también:</p>
        <div >
          {visitAlso.map(({ id, img, width, height }) => {
            return (
              <Image 
              key={id} 
              src={`/footer_img/${img}.svg`} 
              width={width} 
              height={height}
              alt={`logo de ${img}`}
              />
            )}
          )}
        </div>
      </div>

      <div className={styles.footer_right}>
        <p> 
          2023 Éxito ® creado por{' '}
          <a href='http://www.linkedin.com/in/sergio-jaramillo-luna' target='_blank'>Sergio Jaramillo.</a> 
        </p>
      </div>

    </footer>
  )
}