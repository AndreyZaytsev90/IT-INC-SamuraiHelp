import React from 'react';
import './App.css';
import {ShopList} from "./ShopList";
import {ThingsToBuyPropsType} from "./Typisation";


function App() {

    const thingsToBuy: ThingsToBuyPropsType = [
        {id: 1, title: 'Milk', expectedPrice: '$1.99', realPrice: '$1.99', inCart: true},
        {id: 2, title: 'Bread', expectedPrice: '$0.99', realPrice: '$0.89', inCart: true},
        {id: 3, title: 'Coca-Cola', expectedPrice: '$1.49', realPrice: '$1.49', inCart: true},
        {id: 4, title: 'Eggs', expectedPrice: '$2.49', realPrice: '$3.99', inCart: false},
        {id: 5, title: 'Cakes', expectedPrice: '$4.99', realPrice: '$6.99', inCart: false},
    ]

    return (
        <div className="App">
            <ShopList
                title={"What to buy"}
                whatToBuy={thingsToBuy}
            />
        </div>
    );
}

export default App;
