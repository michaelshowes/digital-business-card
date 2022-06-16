import './Details.scss';
import data from '../../data/profile.json';

export default function Details() {
  return (
    <div className='details'>
      { data.map((profile) => {
        return (

          <>
            <div className="details-content">
              <h2 className='h2'>About</h2>
              <p>{ profile.about }</p>
            </div>
            <div className="details-content">
              <h2 className='h2'>Interests</h2>
              <p>{ profile.interests }</p>
            </div>
          </>

        )
      }) }
    </div>
  )
}