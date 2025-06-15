import styles from "./page.module.scss";
import background_img from '../../public/assets/backgrounds/Tahoe-Dark.jpg'
export default function NotFound() {
  return (
    <>
    <div style={{
      backgroundImage: `url(${background_img.src})`, 
      width: '100%', 
      height: '100vh', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      }}>
      <div className={`panel warning  `} >
        <p style={{fontSize: '32px', fontWeight: '800', color: 'white'}}>404</p>
        <p style={{fontSize: '18px', fontWeight: '500', color: 'white'}}>The requested page has not been found</p>
      </div>
    </div>


    </>
  );
}