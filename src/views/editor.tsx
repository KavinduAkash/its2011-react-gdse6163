import React, {useEffect, useState} from 'react';
import Input from "./../components/input/input";
import * as ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from "sweetalert2";
import axios from "axios";
import Cookies from 'js-cookie';
import {useLocation, useNavigate} from "react-router-dom";

function Editor(): JSX.Element {

    const navigate = useNavigate();
    const location = useLocation();

    let article = location?.state?.article;

    const [title, setTitle] = useState<string>(article?article.title: "");
    const [description, setDescription] = useState<string>(article?article.description: "");

    useEffect(()=>{
        //get token
        const ACCESS_TOKEN = Cookies.get("token");
        //check token -> redirect
        if(!ACCESS_TOKEN) {
            navigate("/signin");
        }
    }, []);

    const handleTitle = (e:any, type:string) => {
        setTitle(e.target.value);
    }

    const handleEditor = (html): void => {
        console.log(html);
        setDescription(html)
    }

    const validateSubmission = () => {

        console.log(title)
        console.log(description)

        if(title && description) {
            submitArticle();
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid Inputs",
                text: "Please enter valid inputs"
            });
        }
    }

    const submitArticle = () => {

        const ACCESS_TOKEN = Cookies.get("token");

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': ACCESS_TOKEN
        }

        let body = {
            title: title,
            description: description
        }

        axios.post("http://localhost:8081/article", body, {headers: headers})
            .then(r => {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Article created successfully!"
                });
                navigate('/my-articles');
            })
            .catch(e => {
                Swal.fire({
                    icon: "error",
                    title: "Sorry!",
                    text: "Something went wrong"
                });
            })
    }

    return (
        <section className={'px-28'}>

            <div className={'text-right mt-5'}>
                <button className={'second-btn mr-1'}>Clear</button>
                <button className={'main-btn ml-1'} onClick={validateSubmission}>{ article? "Update":"Publish" }</button>
            </div>

            <Input
                type={'text'}
                name={'title'}
                label={'Title'}
                placeholder={'Enter the title'}
                optional={false}
                callBack={handleTitle}
            />

            <div className={'m-2'}>
                <ReactQuill theme="snow" value={description} onChange={handleEditor}/>
            </div>

        </section>
    );
}

export default Editor;