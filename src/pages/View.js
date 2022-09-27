import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/layout'
import { useAppContext } from '../store/store';

export default function View() {
  const params=useParams();
  const store=useAppContext();
  const [item, setItem]=useState(null)

  useEffect(() => {
    const book=store.getItem(params.bookId);
    setItem(book);
  }, []);

  if(!item){
    return  <Layout>Item not found</Layout>
  }

  return (
    <Layout>
      <h2>{item?.title}</h2>
      <div>
        {item?.cover? <img src={item?.cover} width='400px' alt='' /> : ''}
      </div>
      <div>{item?.author}</div>
      <div>{item?.intro}</div>
      <div>{item?.completed ? 'Leído': 'Por terminar'}</div>
      <div>{item?.review}</div>
    </Layout>
  )
}
