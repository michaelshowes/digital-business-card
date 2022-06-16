import './Header.scss';
import profile_image from '../../assets/images/profile_img.png';
import data from '../../data/profile.json';
import Mailto from 'react-mailto-link';

export default function Header() {
  return (

    <div className='header'>
      { data.map((profile) => {
        return (

          <>
            <div className="img">
              <img src={ profile_image } alt="" />
            </div>
            <div className="header-content">
              <h1 className='h1'>{ profile.name }</h1>
              <h3 className="h3">{ profile.occupation }</h3>
              <div className="h4">{ profile.website }</div>
              <Mailto email={ profile.email }><button>Email</button></Mailto>
            </div>
          </>

        )
      })}
    </div>

  )
}