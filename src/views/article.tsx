import {useLocation} from "react-router-dom";

const article = "<h1>Welcome to typescript</h1>\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda consequuntur eius eum excepturi fuga, hic illo magnam nesciunt placeat sed sequi soluta sunt. Ad at excepturi itaque nemo sed!</p>\n" +
    "\n" +
    "                <ol>\n" +
    "                    <li>java</li>\n" +
    "                    <li>javascript</li>\n" +
    "                    <li>Perl</li>\n" +
    "                    <li>Go</li>\n" +
    "                </ol>";

function Article(): JSX.Element {

    const location = useLocation();
    const title:any = location.state.title;
    const description:any = location.state.description;

    console.log(description)

    return(
        <section className={'my-5 mx-5 min-h-[70vh]'}>

            {/*title*/}
            <div className={'text-4xl font-bold text-center'}>{title}</div>

            {/*content*/}
            <div className={'mt-5 no-more-tailwind'}>

                <div dangerouslySetInnerHTML={{__html: description}}></div>

            </div>

        </section>
    )
}

export default Article;