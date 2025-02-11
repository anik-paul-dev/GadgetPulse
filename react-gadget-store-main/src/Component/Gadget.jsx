/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const Gadget = () => {

    let data= useLoaderData()
    let {category}= useParams()

    let [gadget,setgadget] =useState([])
    
    useEffect(()=>{

        if(category){
            let filterByCategory=[...data].filter(item=>item.category=== category)
          setgadget(filterByCategory)

        }
        else{
            setgadget(data)
        }

        

    },[data,category])
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center'>

            {
                gadget.map(item=><Card gadget={item}></Card>)
            }
            
        </div>
    );
};

export default Gadget;