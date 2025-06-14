import styles from "./page.module.scss";
import background_img from '../../public/backgrounds/Tahoe-Dark.jpg'
export default function NotFound() {
  return (
    <>
    <div style={{
      backgroundImage: `url(${background_img.src})`, 
      width: '100%', 
      height: '100vh', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}>
      <div className={`panel ${styles.panel}`} style={{height: '250px'}}>
        <p style={{fontSize: '32px', fontWeight: '800'}}>404</p>
        <p style={{fontSize: '18px', fontWeight: '500'}}>The requested page has not been found</p>
      </div>
    </div>


    </>
  );
}