import React from 'react';
import {useNavigate} from "react-router-dom";

interface Props {
  title: string,
    content: string
}

interface State {
  
}

function Card(props: Props): JSX.Element {

  const navigate = useNavigate();


  // static getDerivedStateFromProps(props: Props, state: State) {
  //   console.log("--getDerivedStateFromProps");
  //   return null;
  // }
  //
  // componentDidMount(): void {
  //   console.log("--componentDidMount");
  // }
  //
  // shouldComponentUpdate( nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any ): boolean {
  //   console.log("--shouldComponentUpdate");
  //   return true;
  // }
  //
  // getSnapshotBeforeUpdate( prevProps: Readonly<Props>, prevState: Readonly<State> ): any | null {
  //   console.log("--getSnapshotBeforeUpdate");
  //   return null;
  // }
  //
  // componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
  //   console.log("--componentDidUpdate");
  // }
  //
  // componentWillUnmount(): void {
  //   console.log("--componentWillUnmount*****");
  // }

    return(
      <div className={'w-72 p-5 border-solid border-2 m-5'}>
        <h1 className={'text-2xl font-bold mb-2'}>{props.title}</h1>
        {/*<p className={'my-5'}>{this.props.content}</p>*/}
        <button className={'main-btn'} onClick={() => navigate('/article', {state: {title: props.title, description: props.content}})}>Read More...</button>
      </div>
    );
}

export default Card;