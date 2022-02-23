import { links } from "../data";
import Link from './Link';
import './hero.scss';

const Hero = ({ imageUrl, subHeading, heading, description, linkLabel, link, ...rest}) => {

    //const cls = `section ${className}`

    return (
        <section className="main" {...rest}>
        <div className="main__mainText">
          <p className="subHeading">{subHeading}</p>
          <h1>{heading}</h1>
          <p className="main__description">
            {description}
          </p>
          <Link href={link}>{linkLabel}</Link>
        </div>
        <figure className="heroPhoto">
          <img src={imageUrl} alt=""></img>
        </figure>
      </section>
    )
}

export default Hero;