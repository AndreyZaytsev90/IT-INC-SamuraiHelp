import React from 'react';
import {ShopListPropsType} from "./Typisation";


export const ShopList = (props: ShopListPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <ol>
                <li>
                    <div><b>{props.whatToBuy[0].title}</b></div>
                    <div>{'expected price: ' + props.whatToBuy[0].expectedPrice}</div>
                    <div>{'real price: ' + props.whatToBuy[0].realPrice}</div>
                    <span>in basket: </span>
                    <input type={"checkbox"} checked={props.whatToBuy[0].inCart}/>
                </li>
                <li>
                    <div><b>{props.whatToBuy[1].title}</b></div>
                    <div>{'expected price: ' + props.whatToBuy[1].expectedPrice}</div>
                    <div>{'real price: ' + props.whatToBuy[1].realPrice}</div>
                    <span>in basket: </span>
                    <input type={"checkbox"} checked={props.whatToBuy[1].inCart}/>
                </li>
                <li>
                    <div><b>{props.whatToBuy[2].title}</b></div>
                    <div>{'expected price: ' + props.whatToBuy[2].expectedPrice}</div>
                    <div>{'real price: ' + props.whatToBuy[2].realPrice}</div>
                    <span>in basket: </span>
                    <input type={"checkbox"} checked={props.whatToBuy[2].inCart}/>
                </li>
                <li>
                    <div><b>{props.whatToBuy[3].title}</b></div>
                    <div>{'expected price: ' + props.whatToBuy[3].expectedPrice}</div>
                    <div>{'real price: ' + props.whatToBuy[3].realPrice}</div>
                    <span>in basket: </span>
                    <input type={"checkbox"} checked={props.whatToBuy[3].inCart}/>
                </li>
                <li>
                    <div><b>{props.whatToBuy[4].title}</b></div>
                    <div>{'expected price: ' + props.whatToBuy[4].expectedPrice}</div>
                    <div>{'real price: ' + props.whatToBuy[4].realPrice}</div>
                    <span>in basket: </span>
                    <input type={"checkbox"} checked={props.whatToBuy[4].inCart}/>
                </li>
            </ol>
            <div>
                <button>The whole list</button>
                <button>Shopping cart</button>
                <button>Not in cart yet</button>
            </div>
        </div>
    );
};