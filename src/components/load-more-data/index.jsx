import React, { useEffect, useState } from 'react'; 
import './style.css';

export default function LoadMoreData() {

   
    const [Loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [dissableButton, setDissableButton] = useState(false);


    async function fetchProducts() {
        try {
             setLoading(true);
            const response = await fetch(
            `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
        }`
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json(); 
        if(result && result.products && result.products.length) { 
            setProducts((prevData) =>[...prevData, ...result.products]);
            
         }
        setLoading(false);
        console.log(result);
        } catch (e) {

            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    },[count]);

    useEffect(()=>{

        if(products && products.length == 100) setDissableButton(true)

        });



    if(Loading){
        return (
            <div>
                <h1>Loading Data Please Wait...</h1>
            </div>
        )
    }

    return (
        <div className="load-more-container">
           <div className="product-container">
                {
                    products && products.length 
                    ? products.map( (item) =>
                     <div className="product" key={item.id}>
                         <img
                          src={item.thumbnail}
                          alt={item.title}
                         /> 
                        <p>{item.title} </p>
                    
                    </div>)
                    :null
                }
           </div>

           <div className='button-container'>
            <button disabled={dissableButton} onClick={()=> setCount(count + 1)}>Load More..</button>
                {
                    dissableButton 
                    ? <p>Reached 100 products</p>
                    : null
                }

           </div>


        </div>
    )
}