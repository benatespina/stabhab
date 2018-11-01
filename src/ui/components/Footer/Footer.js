import React from 'react';
import Image from './../Image/Image';
import './Footer.css';

export default () => (
  <footer className="footer">
    <div className="footer__fan-protect">
      <Image className="footer__fan-protect-image" src="/images/fan-protect.png" alt="Fan Protect" />
      Buy and sell with confidence
      <br />
      Customer service all the way to your seat
      <br />
      Every order is 100% guaranteed
    </div>
    <div className="footer__copyright">
      © 2000-2018. All Rights Reserved. Use of this website signifies your agreement to our{' '}
      <a className="footer__link" href="https://www.stubhub.com/legal/">
        User Agreement, Privacy Notice and Cookie Notice
      </a>
      .<br />
      You are buying tickets from a third party; StabHab is not the ticket seller. Prices are set by sellers and may be
      above face value
    </div>
  </footer>
);
