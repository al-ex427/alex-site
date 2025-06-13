import styles from "./page.module.scss";
import background_img from '../../public/backgrounds/Tahoe-Light.jpg'
export default function Home() {
  return (
    <>
    <div style={{
      backgroundImage: `url(${background_img.src})`, 
      width: '100%', 
      height: '100vh', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      }}>
      <div className={`panel ${styles.panel}`}>
        <p style={{fontSize: '24px', textAlign: 'center', fontWeight: '600'}}>This website is not finished <strong>yet!</strong></p>
        <p style={{fontSize: '18px', textAlign: 'center', fontWeight: '500'}}>In the meanwhile, you can do these things</p>
        <ul>
          <li><a href="https://wiki.alex427.com">Visit the wiki</a></li> 
          <li><a href="https://shitfest.net/index">View memes [WILL REDIRECT YOU]</a></li>
        </ul>
        
        </div>
    </div>

    </>
  );
}
