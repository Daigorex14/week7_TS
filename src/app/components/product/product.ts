export class Product{
    id : number;
    name : string;
    price : number;
    stock : number;
    picture : string;

    constructor(id:number, name:string, price:number, stcok:number, picture:string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stcok;
        this.picture = picture;
    }
}