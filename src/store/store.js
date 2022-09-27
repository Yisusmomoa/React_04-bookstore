// cuando el archivo maneja un estado de forma global
import { createContext, useContext, useEffect, useState, React } from 'react'

const appContext=createContext({
    items:[], //estructura del estado que queremos manejar
    createItem:(item)=>{},
    getItem:(id)=>{},
    updateItem:(item)=>{}
}); //

export default function Store({children}) {
    //ciclo de vida del componente
        const [items, setItems]=useState([]);
    //ciclo de vida del componente
    function createItem(item) {
        const temp=[...items];
        temp.push(item);
        setItems(temp);
    }

    function getItem(id) {
        const item=items.find(element=> element.id===id);
        return item;
    }

    function updateItem(item) {
        const index=items.findIndex(element=> element.id===item.id);
        const temp=[...items];
        temp[index]={...item};

    }

    return (
        // value{} -> todos los valores de nuestro contexto
        <appContext.Provider value={{
            items,
            createItem,
            getItem,
            updateItem,
        }}>
            {children}
        </appContext.Provider>
    )
}


export function useAppContext(){
    return useContext(appContext);
} 