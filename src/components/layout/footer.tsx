import React from 'react';

class Footer extends React.Component<any, any> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return(
      <footer className={'bg-teal-950 text-white p-5'}>
        <img src="https://logodix.com/logo/1597040.png" title="logo" alt="logo" className={'w-[50px]'}/>
        <ul className={'mt-5'}>
          <li>123D, Flower Rd, Colombo</li>
          <li>+94 76 722 3131</li>
          <li>+94 38 722 3131</li>
          <li>info@blog.lk</li>
        </ul>
        <div className={'mt-5 text-center'}>Copyright © 2023 Blog LK</div>
      </footer>
    );
  }

}

export default Footer