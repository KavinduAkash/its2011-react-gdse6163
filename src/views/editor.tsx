import React from 'react';

class Editor extends React.Component<any, any> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return(
      <div>

        <div className={'m-2'}>
          <label htmlFor="title" className={'block'}>Title<span className="text-red-600">*</span></label>
          <input type="text" id="title" placeholder="Title" className={'block border border-green-300 outline-none focus:border-green-600 h-10 w-full'}/>
        </div>

      </div>
    );
  }

}

export default Editor;