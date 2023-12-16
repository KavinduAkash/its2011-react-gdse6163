import React from 'react';
import Card from "./components/card/card";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./views/home";
import Login from "./views/login";

interface Props {
}

interface State {
  count: number
}

class App extends React.Component<Props, State> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return (
      <div>

        <Header/>

        {/*<Home/>*/}

        <Login/>

        <Footer/>

      </div>
    );
  }

}

export default App
