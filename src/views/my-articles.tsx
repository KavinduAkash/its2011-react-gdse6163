import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import * as DateHanlder from '../util/datehanlder';

// function MyArticles(): JSX.Element {
//   return <div>My Articles</div>
// }

interface Data {
  id: number,
  publishedDate: string,
  title: string,
  description: string
}
const MyArticles = (): JSX.Element => {

  const navigate = useNavigate();

  const [data, setData] = useState<Data[]>([]);


  useEffect(()=>{
    //get token
    const ACCESS_TOKEN = Cookies.get("token");
    //check token -> redirect
    if(!ACCESS_TOKEN) {
      navigate("/signin");
    }

    getMyArticles();

  }, []);

  const getMyArticles = () => {
    const ACCESS_TOKEN = Cookies.get("token");
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': ACCESS_TOKEN
    }
    axios.get("http://localhost:8081/article/get/my?size=10&page=1", {headers: headers})
        .then(r => {
          console.log(r.data.data);
          setData(r.data.data);
        })
        .catch(e => {
          Swal.fire({
            icon: "error",
            title: "Sorry!",
            text: "Something went wrong"
          });
        })
  }

  const deleteArticle = (r:any) => {

    Swal.fire({
      icon: "question",
      title: "Are you sure to delete this article?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        let id = r._id;

        const ACCESS_TOKEN = Cookies.get("token");
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': ACCESS_TOKEN
        }

        axios.delete(`http://localhost:8081/article/${id}`, {headers: headers})
            .then(r => {
              Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Article deleted successfully!"
              });
              getMyArticles();
            })
            .catch(e =>{
              Swal.fire({
                icon: "error",
                title: "Sorry!",
                text: "Something went wrong"
              });
            })

      }
    });
  }

  return (
    <section>
      <div className={'my-5 mx-20'}>

        <table>

          <thead className={'bg-gray-100'}>
            <tr>
              <th className={'py-5'}>Date</th>
              <th className={'py-5'}>Title</th>
              <th className={'py-5'}>Actions</th>
            </tr>
          </thead>

          <tbody>
          {
            data.map((r: Data, index: number) => {
              return <tr className={'border-b'}>
                <td className={'w-[15%]'}>{ DateHanlder.formatDate(r.publishedDate) }</td>
                <td className={'w-[50%]'}>{r.title}</td>
                {/*<td className={'w-[50%]'}>{r.content}</td>*/}
                <td className={'w-[15%]'}>

                  <button className={'bg-blue-600 text-white p-3 rounded-full mx-2'}><FaEye /></button>
                  <button className={'bg-green-600 text-white p-3 rounded-full mx-2'}><FaPen /></button>
                  <button className={'bg-red-600 text-white p-3 rounded-full mx-2'} onClick={() => deleteArticle(r)}><FaTrash /></button>

                </td>
              </tr>
            })
          }
          </tbody>

        </table>

      </div>
    </section>
  )
}

export default MyArticles;