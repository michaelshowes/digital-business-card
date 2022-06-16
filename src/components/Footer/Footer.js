/* eslint-disable array-callback-return */

import './Footer.scss';
import data from '../../data/profile.json';
import twitter from '../../assets/images/twitter_icon.svg';
import facebook from '../../assets/images/fb_icon.svg';
import instagram from '../../assets/images/ig_icon.svg';
import linkedin from '../../assets/images/linkedin_icon.svg';
import github from '../../assets/images/github_icon.svg';

export default function Footer() {
  return (
    <div className='footer'>
      <ul>

      {/* Twitter */}
      { data.map((profile) => {
        if (profile.twitter_link) {
          return (
            <li>
              <a
                href={ profile.twitter_link }
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ twitter }
                  alt="Link to Twitter profile."
                />
              </a>
            </li>
          )
        }
      })}

      {/* Facebook */}
      { data.map((profile) => {
        if (profile.facebook_link) {
          return (
            <li>
              <a
                href={ profile.facebook_link }
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ facebook }
                  alt="Link to Facebook profile."
                />
              </a>
            </li>
          )
        }
      })}

      {/* Instagram */}
      { data.map((profile) => {
        if (profile.instagram_link) {
          return (
            <li>
              <a
                href={ profile.instagram_link }
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ instagram }
                  alt="Link to Instagram profile."
                />
              </a>
            </li>
          )
        }
      })}

      {/* LinkedIn */}
      { data.map((profile) => {
        if (profile.linkedin_link) {
          return (
            <li>
              <a
                href={ profile.linkedin_link }
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ linkedin }
                  alt="Link to LinkedIn profile."
                />
              </a>
            </li>
          )
        }
      })}

      {/* GitHub */}
      { data.map((profile) => {
        if (profile.github_link) {
          return (
            <li>
              <a
                href={ profile.github_link }
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ github }
                  alt=""
                />
              </a>
            </li>
          )
        }
      })}

      </ul>
    </div>
  )
}