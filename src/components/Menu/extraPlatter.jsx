import Image from 'next/image';
import griessundmascarponerolle from '../../images/Griess-und-Mascarpone-Rolle.jpg';
import kaeseobstplatte from '../../images/Kaese-Obst-Platte.jpg';
import milchreosmitorangenpudding from '../../images/Milchreis-mit-Orangen-Pudding.jpg';
import minipancakemitmacarpone from '../../images/Mini-Pancake-mit-Macarpone-und-Pistazien.jpg';
import sandwichplattevegetarisch from '../../images/Sandwich-Platte-vegetarisch.jpg';
import sandwichplatte from '../../images/Sandwich-Platte.jpg';
import styles from './extraPlatter.module.css';
import { useState } from 'react';
import { CartContext } from '@/context/CartContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import Button from './Button';
const extraplatters=[
{
    id:1,URL:sandwichplattevegetarisch ,title:"Sandwich Platte Vegetarisch",price:"10"
},
{
    id:2,URL:sandwichplatte, title:"Sandwich Platte",price:"12"
},
{
    id:3,URL:kaeseobstplatte, title:"Kaese Platte mit Obst und Nussen",price:"12"
 
}
]
const desserts=[
    {
        id:4,URL:griessundmascarponerolle ,title:"Griess und Mascarponerolle",price:"18"
    },
    {
        id:5,URL:minipancakemitmacarpone ,title:"Mini pancake mit Macarpone",price:"18"
    },
{
    id:6,URL:milchreosmitorangenpudding,title:"Milchreis mit Orangen pudding",price:"15"
}
]
export default function ExtraPlatter()
{
    const[cart,setcart]=useState(false);
    const{items,addToCart,removeFromCart}=useContext(CartContext);
    return (
    <div className={styles.cover}>
        <h3 className={styles.title}>Extra Platten (für 10 Personen mit Preisaufschlag)</h3>
        <div className={styles.extraplatter}>
       {
        extraplatters.map((dish)=>{
            let {id,URL,title,price} = dish;
            return(
                <div className={styles.dish} key={dish.id}>
                <Image className={styles.Image} src={dish.URL} alt={dish.title} width={200} height={200}/>
                <span>{dish.title} </span>
                <span>{dish.price}€</span>    
                <Button dish={dish}/>
                </div>
            )   })  
       }
        </div>
        <h3 className={styles.title}>Dessert (für 10 Personen mit Preisaufschlag)</h3>
        <div className={styles.extraplatter}>
        {
           desserts.map((dish)=>{
            return(
                <div className={styles.dish} key={dish.id}>
                <Image className={styles.Image} src={dish.URL} alt={dish.title} width={200} height={200}/>
                <span>{dish.title}</span><span>{dish.price}€</span>
                <Button dish={dish}/>
                </div>
            )
        }) 
        }
        </div>
        </div>  
    )     
}