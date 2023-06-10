import Image from 'next/image'
import styles from './banner.module.css';
import logo from '../public/vercel.svg';

const bannerStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'orange',
    textAlign: 'center',
}

const Banner = ({children}) => {
  return (
    <header className='row mb-5'>
        <div className='col-lg-5'>
        <Image
         src={logo} 
         alt="logo"
         className={styles.logo}
         />
        </div>
        <div className='col-lg-7 mt-5'>
            <h3 style={bannerStyle}>{children}</h3>
        </div>
    </header>
  )
}

export default Banner;