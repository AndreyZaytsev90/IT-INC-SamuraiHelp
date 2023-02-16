export type ThingsToBuyPropsType = {
    id: number,
    title: string,
    expectedPrice: string,
    realPrice: string,
    inCart: boolean
}

export type ShopListPropsType = {
    title: string,
    whatToBuy: ThingsToBuyPropsType[],
}