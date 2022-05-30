 import React,{useState,useEffect} from "react";
import AddProduct from "./AddProduct";

import Pagination from './Pagination'

import { Grid,GridItem} from "@chakra-ui/react";
const Products = () => {
  const [data,setData] = useState([]);

  // TODO: Remove below const and instead import them from chakra
    useEffect(()=>{
    getData()   
    },[])
  // }

    const getData = async()=>{
      try{
          let res = await fetch(`http://localhost:8080/products`);
          let data = await res.json();
         setData(data);
         console.log(data)
      }
      catch(error){
          console.log(error)
      }
    }
  <div />;
  const deletetable=(id)=>{
    fetch(`http://localhost:8080/products/${id}`,{
        method :"DELETE"
    }).then((res)=>{

        res.json().then((resp)=>{
            console.warn(resp)
            getData()
        })
    })
  }
  <div />;

 
  return (
    <div>
      <AddProduct />
      {data.map((pro) => (
       
        <Grid templateColumns='repeat(4, 1fr)' gap={0}>
           <Grid templateRows='repeat(3, 1fr)' gap={0}></Grid>
          
             <GridItem colSpan={1} h='10' bg='tomato' />
           <GridItem colStart={1} colEnd={4} h='10' bg='papayawhip' />
         
          <h6>{pro.id}</h6>
          <div> <img src={pro.imageSrc}/></div>
          
          <div> {pro.category}</div>
          <div>{pro.gender}</div>
          <div>{pro.price}</div>
          
          
         </Grid>
     
      ))}
      
      <Pagination/>
    </div>

  )

  
   
    //   {/*  AddProduct */}
 
    //  {/* List of Products */}
    //   {/* Pagination */}
    
  
};

export default Products;
