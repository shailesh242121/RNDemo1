  class ProductItem {
      name:string;
      stock:number;
      id:string;
  
      constructor(name:string, stock:number) {
          this.name = name;
          this.stock = stock;
          this.id = Math.random().toString();
      }
      
    

   
    }

    export default ProductItem;