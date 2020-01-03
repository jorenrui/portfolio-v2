import React from 'react';

function Footer() {
  let today = new Date();
  let year = today.getFullYear();

  return <footer className='footer'>Copyright © 2019-{year} Joeylene Rivera.</footer>;
}

export default Footer;
