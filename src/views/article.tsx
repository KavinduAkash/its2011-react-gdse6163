
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
    return(
        <section className={'my-5 mx-5 min-h-[70vh]'}>

            {/*title*/}
            <div className={'text-4xl font-bold text-center'}>Title</div>

            {/*content*/}
            <div className={'mt-5 no-more-tailwind'}>

                <h1>Welcome to typescript</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda consequuntur eius eum excepturi fuga, hic illo magnam nesciunt placeat sed sequi soluta sunt. Ad at excepturi itaque nemo sed!</p>

                <ol>
                    <li>java</li>
                    <li>javascript</li>
                    <li>Perl</li>
                    <li>Go</li>
                </ol>

            </div>

        </section>
    )
}

export default Article;