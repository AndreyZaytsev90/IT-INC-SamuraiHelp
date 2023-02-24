import React, {useState} from 'react';
import './App.css';
import {ShopList} from "./ShopList";
import {ThingsToBuyPropsType} from "./Typisation";
import {v1} from "uuid";


function App() {

    const [thingsToBuy, setThingsToBuy] = useState<ThingsToBuyPropsType>([
        {id: v1(), title: 'Milk', expectedPrice: '$1.99', realPrice: '$1.99', inCart: true},
        {id: v1(), title: 'Bread', expectedPrice: '$0.99', realPrice: '$0.89', inCart: true},
        {id: v1(), title: 'Coca-Cola', expectedPrice: '$1.49', realPrice: '$1.49', inCart: true},
        {id: v1(), title: 'Eggs', expectedPrice: '$2.49', realPrice: '$3.99', inCart: false},
        {id: v1(), title: 'Cakes', expectedPrice: '$4.99', realPrice: '$6.99', inCart: false},
    ])

    const onClickDeleteItemHandler = (id: string, title: string) => {
        /*alert(`Товар ${title} из списка удален` )
        alert('id товара: ' + id)*/
        debugger
        const filteredThing = thingsToBuy.filter((item) => item.id !== id)
        setThingsToBuy(filteredThing)
    }

    return (
        <div className="App">
            <ShopList
                title={"What to buy"}
                whatToBuy={thingsToBuy}
                onClickDeleteItemHandler={onClickDeleteItemHandler}
            />
        </div>
    );
}

export default App;
