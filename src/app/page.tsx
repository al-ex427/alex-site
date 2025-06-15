import background_img from '../../public/assets/backgrounds/Tahoe-Light.jpg'
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
      <div className={`panel`}>
        <p style={{fontSize: '24px', fontWeight: '600'}}>This website is not finished <strong>yet!</strong></p>
        <p style={{fontSize: '18px', fontWeight: '500'}}>In the meanwhile, you can do these things</p>
        <ul>
          <li><a href="https://wiki.alex427.com">Visit the wiki</a></li> 
          <li><a href="https://shitfest.net/index">View memes [WILL REDIRECT YOU]</a></li>
          <li><a href="https://github.com/al-ex427/alex-site">Visit website source code [WILL REDIRECT YOU]</a></li>
        </ul>
        
        </div>
    </div>


    </>
  );
}


/*
    <div>
      <div className={`panel ${styles.panel}`} style={{height: '250px'}}>
        <p style={{fontSize: '18px', fontWeight: '500'}}>Are you sure you want to exit this website?</p>
      </div>  
    </div>
    */