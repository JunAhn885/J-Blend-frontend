'use client'
import styles from 'components/stylesheets/item-modal.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function ItemModal({}){
    //test varible. item_obj will be passed down as a prop from the parent
    const item_obj = {
        "Name": "Chirashi",
        "Description": "tuna, chopped fatty tuna, salmon, ocean trout, albacore, shrimp, fresh water eel, masago with fresh wasabi",
        "Price": 18.95
    }
    
    const [count, setCount] = useState(1)
    // by default, total price will be set as the price from the item_obj
    const [totalPrice, setTotalPrice] = useState(item_obj["Price"])
    
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
                <button onClick={decCounter}>-</button>
                <p>{count}</p>
                <button onClick={incCounter}>+</button>
            </div>
            <button>{`Add to order ${calTotalPrice()}`}</button>
            <form>
                <label for="fname">Special Instructions</label>
                <input type="text" id="fname" name="fname"/>
            </form>
        </div>
    )
}