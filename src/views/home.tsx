import React, {useEffect, useState} from 'react';
import Card from "./../components/card/card";
import axios from "axios";

interface Data {
  id: number,
  title: string,
  description: string
}

function Home(): JSX.Element {

  const[data, setData] = useState<Data[]>([]);

  /**
   * fetch article data
   */
  const fetchData = (): void => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(result => {
    //       // data
    //       console.log(result);
    //       this.setState({data: result});
    //
    //     }).catch(err => {
    //   console.log(err);
    // })

      axios.get('http://localhost:8081/article?size=100&page=1').then(response => {
          // console.log(response.data.data);
          setData(response.data.data);
      }).catch(err => {
          console.log(err);
      })
  }

  // componentDidMount(): void {
  //   this.fetchData();
  // }

    useEffect(() => {
        fetchData();
        console.log("Called");
    }, []);

    return(
      <section>
        <div
          className={'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto'}>

          {
            data.map((r: Data, index: number) => {
              return <Card title={r.title} content={r.description}/>
            })
          }

        </div>
      </section>
    );

}

export default Home;