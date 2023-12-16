import { FaEye, FaPen, FaTrash } from "react-icons/fa";
// function MyArticles(): JSX.Element {
//   return <div>My Articles</div>
// }

interface Data {
  id: number,
  date: string,
  title: string,
  content: string
}

const data: Data[] = [
  {
    id: 1,
    date: "2023-12-16 13:00:00",
    title: "IJSE",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
  },
  {
    id: 2,
    date: "2023-12-16 14:00:00",
    title: "GDSE",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
  },
  {
    id: 3,
    date: "2023-12-16 15:00:00",
    title: "Javascript",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
  },
  {
    id: 4,
    date: "2023-12-16 16:00:00",
    title: "Typescript",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
  },
  {
    id: 5,
    date: "2023-12-16 17:00:00",
    title: "Java",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
  },
  {
    id: 6,
    date: "2023-12-16 18:00:00",
    title: "Go",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit ipsa quae tenetur totam. Ad architecto asperiores culpa cupiditate doloremque, dolores minima numquam perferendis quaerat, quasi sequi similique tempore voluptas."
  },
];

const MyArticles = (): JSX.Element => {
  return (
    <section>
      <div className={'my-5 mx-20'}>

        <table>

          <thead className={'bg-gray-100'}>
            <tr>
              <th className={'py-5'}>Date</th>
              <th className={'py-5'}>Title</th>
              <th className={'py-5'}>Content</th>
              <th className={'py-5'}>Actions</th>
            </tr>
          </thead>

          <tbody>
          {
            data.map((r: Data, index: number) => {
              return <tr className={'border-b'}>
                <td className={'w-[15%]'}>{r.date}</td>
                <td className={'w-[20%]'}>{r.title}</td>
                <td className={'w-[50%]'}>{r.content}</td>
                <td className={'w-[15%]'}>

                  <button className={'bg-blue-600 text-white p-3 rounded-full mx-2'}><FaEye /></button>
                  <button className={'bg-green-600 text-white p-3 rounded-full mx-2'}><FaPen /></button>
                  <button className={'bg-red-600 text-white p-3 rounded-full mx-2'}><FaTrash /></button>

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