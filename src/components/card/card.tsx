import React from 'react';

interface Props {
  title?: string,
  content?: string
}

class Card extends React.Component<Props, any> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return(
      <div className={'w-72 p-5 border-solid border-2 m-5'}>
        <h1 className={'text-2xl font-bold'}>{this.props.title}</h1>
        <p className={'my-5'}>{this.props.content}</p>
        <button className={'bg-green-600 p-2 text-white'}>Read More...</button>
      </div>
    );
  }
}

export default Card;