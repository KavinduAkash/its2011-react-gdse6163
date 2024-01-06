import React from 'react';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./views/home";
import Login from "./views/login";
import Signup from "./views/signup";
import Editor from "./views/editor";
import MyArticles from "./views/my-articles";
import Article from "./views/article";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Component1 from "./components/Component1";

interface Props {
}

interface State {
  count: number
}

class App extends React.Component<Props, State> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            {/*<Route path={"/"} element={<Component1/>}/>*/}
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/signin"} element={<Login/>}/>
            <Route path={"/signup"} element={<Signup/>}/>
            <Route path={"/editor"} element={<Editor/>}/>
            <Route path={"/my-articles"} element={<MyArticles/>}/>
            <Route path={"/article"} element={<Article/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }

}

export default App
