import React from 'react';

interface Props {
  title: string,
  content: string
}

interface State {
  
}

class Card extends React.Component<Props, any> {

  constructor(props: Props) {
    super(props);
    this.state = {count: 0}
    // console.log("-- Constructor");
  }

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

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return(
      <div className={'w-72 p-5 border-solid border-2 m-5'}>
        <h1 className={'text-2xl font-bold'}>{this.props.title}</h1>
        <p className={'my-5'}>{this.props.content}</p>
        <button className={'main-btn'}>Read More...</button>
      </div>
    );
  }
}

export default Card;