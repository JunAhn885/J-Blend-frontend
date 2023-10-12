'use client'
import styles from 'components/stylesheets/item-modal.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function ItemModal({open, setOpen, item_obj}){
    const [count, setCount] = useState(1)
    
    function decCounter(){
        setCount(count - 1)
    }

    function incCounter(){
        setCount(count + 1)
    }

    function calTotalPrice(){
        let price = item_obj["Price"] * count
        return Math.round(price * 100) / 100
    }

    // disables dec counter buttom if count == 1 as we cannot have 0 or negative items
    function decCounterButton(){
        if (count === 1){
            return(
                <button onClick={decCounter} disabled>-</button>
            )
        }  else{
            return(
                <button onClick={decCounter}>-</button>
            )
        }
    }

    // do not display the modal if open is false
    if (open == false){
        return null
    } 

    return (
        <div>
            <Image
                src="/chirashi.jpeg"
                width="300"
                height="300"
                alt="Chirashi"
            />
            <h1>{item_obj["Name"]}</h1>
            <h2>{item_obj["Price"]}</h2>
            <h3>{item_obj["Description"]}</h3>
            <div>
                {decCounterButton()}
                <p>{count}</p>
                <button onClick={incCounter}>+</button>
            </div>
            <div>
                <button onClick={()=>{setOpen(false)}}>x</button>
                <button>{`Add to order ${calTotalPrice()}`}</button>
            </div>
            <form>
                <label for="fname">Special Instructions</label>
                <input type="text" id="fname" name="fname"/>
            </form>
        </div>
    )
}