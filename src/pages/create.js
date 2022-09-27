import React, { useState } from 'react'
import { useAppContext } from '../store/store';
import Layout from '../components/layout';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    // use states
    const [title, setTitle]=useState('');
    const [author, setAuthor]=useState('');
    const [cover, setCover]=useState('');
    const [intro, setIntro]=useState('');
    const [completed, setCompleted]=useState(false);
    const [review, setReview]=useState('');

    const store=useAppContext();

    const navigate=useNavigate();


    function handleChange(e) {
        const name=e.target.name;
        const value=e.target.value;
        switch (name) {
            case 'title':
                setTitle(value)
                break;
            case 'author':
                setAuthor(value)
                break;
            case 'intro':
                setIntro(value)
                break;
            case 'completed':
                setCompleted(e.target.checked)
                break;
            case 'review':
                setReview(value)
                break;
            default:
                break;
        }
    }

    function handleOnChangeFile(e){
        const element=e.target;//este es mi elemento html input
        const file=element.files[0];
        const reader=new FileReader(); //es una api que me permite manipular archivos desde el avegador
        reader.readAsDataURL(file);
        reader.onloadend=function () {
            setCover(reader.result.toString());
        }

    }
    function handleSubmmit(e){
        e.preventDefault();

        const newBook={
            id:crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review
        }
        //TODO: mandar a registrar
        store.createItem(newBook);
        navigate("/");
    }

  return (
    <Layout>
        <form onSubmit={handleSubmmit}>
            <div>
                <div>Title</div>
                <input type='text' name='title' onChange={handleChange} value={title} />
            </div>
            <div>
                <div>Author</div>
                <input type='text' name='author' onChange={handleChange} value={author} />
            </div>
            <div>
                <div>Cover</div>
                <input type='file' name='cover' onChange={handleOnChangeFile}/>
                <div>{!! cover? <img src={cover} alt='preview' width='200px' /> : ""}</div>
            </div>
            <div>
                <div>Intro</div>
                <input type='text' name='intro' onChange={handleChange} value={intro} />
            </div>
            <div>
                <div>Completed</div>
                <input type='checkbox' name='completed' onChange={handleChange} value={completed} />
            </div>
            <div>
                <div>Review</div>
                <input type='text' name='review' onChange={handleChange} value={review} />
            </div>
            <input type='submit' value='Register book' />
        </form>
    </Layout>
  )
}
