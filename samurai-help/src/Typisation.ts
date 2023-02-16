export type ThingsToBuyPropsType = Array<ThingPropsType>

export type ThingPropsType = {
    id: number,
    title: string,
    expectedPrice: string,
    realPrice: string,
    inCart: boolean
}

export type ShopListPropsType = {
    title: string,
    whatToBuy: ThingsToBuyPropsType
}