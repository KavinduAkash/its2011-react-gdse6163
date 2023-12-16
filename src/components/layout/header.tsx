import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component<any, any> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return(
      <header>
        <nav className={'flex justify-between items-center bg-green-100 p-5'}>
          <img src="https://logodix.com/logo/1597040.png" title="logo" alt="logo" className={'w-[50px]'}/>
          <ul className={'flex gap-[4vw]'}>
            <li><Link to={'/'}>Articles</Link></li>
            <li><Link to={'/my-articles'}>My Articles</Link></li>
            <li><Link to={'/editor'}>Write New Article</Link></li>
            <li><Link to={'/signin'}>Create An Account / Login</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

}

export default Header;