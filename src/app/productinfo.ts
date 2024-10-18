export class Productinfo {
    productname!:string
    productquantity!:number
    section!:string
    price!:number
    total?:number
    selectedProduct?:{ productname: string; section: string; price: number };
}
