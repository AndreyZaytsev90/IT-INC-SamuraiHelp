export type ThingsToBuyPropsType = Array<ThingPropsType>

export type ThingPropsType = {
    id: string,
    title: string,
    expectedPrice: string,
    realPrice: string,
    inCart: boolean
}

export type ShopListPropsType = {
    title: string,
    whatToBuy: ThingsToBuyPropsType
}