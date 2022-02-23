import React from 'react';
import './heroSection.scss';
import heroPhoto from '../heroPhoto.png';
import Link from './Link';

const MainSection = () => {
  return (
    <>
      <section class="main">
        <div className="main__mainText">
          <p>Welcome to professional</p>
          <h1>Model Agency</h1>
          <p class="main__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            volutpat dictum pretium. Mauris eu tincidunt felis. Duis facilisis
            urna ante, in dapibus ante dignissim id. Phasellus eu ligula
            maximus, fermentum risus quis, pellentesque neque. Pellentesque
            hendrerit molestie eros vitae vehicula.{' '}
          </p>
          <Link href="\">Read more</Link>
        </div>
        <figure className="heroPhoto">
          <img src={heroPhoto} alt="model"></img>
        </figure>
      </section>
    </>
  );
};

export default MainSection;
