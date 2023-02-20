import React from 'react';
import {ShopListPropsType} from "./Typisation";


export const ShopList = (props: ShopListPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <ol>
                {props.whatToBuy.map((el) => {
                    return (
                        <li key={el.id}>
                            <div><b>{el.title}</b></div>
                            <div>{'expected price: ' + el.expectedPrice}</div>
                            <div>{'real price: ' + el.realPrice}</div>
                            <span>in basket: </span>
                            <input type={"checkbox"} checked={el.inCart}/>
                        </li>
                    )})}
            </ol>
            <div>
                <button>The whole list</button>
                <button>Shopping cart</button>
                <button>Not in cart yet</button>
            </div>
        </div>
    );
};