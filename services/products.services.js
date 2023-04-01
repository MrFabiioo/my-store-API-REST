const {faker}= require('@faker-js/faker');

class ProductsService{

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit= 100;
    for (let index = 0; index < limit; index++) {
        this.products.push({
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          price:parseInt(faker.commerce.price(),10),
          image: faker.image.imageUrl()
        });
    }
  }

  create(data){
    const newProduct ={
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find(item => item.id ===id);
  }

  update(id,changes){
    const index = this.products.findIndex(item =>item.id ===id);
    if (index===-1) {
      throw new Error('Product Not Found !!')
    }
    const product = this.products[index];
    this.products[index]={ //==>  ... spread operator
      ...product, // aca dice: conserva los elementos del objeto y:
      ...changes // añadele los cambios del objeto anterior.
    };
    return this.products[index];

  }

  delete(id){
    const index = this.products.findIndex(item =>item.id ===id);
    if (index===-1) {
      throw new Error('Product Not Found !!')
    }
    this.products.splice(index,1); // metodo splice elimina una posicion => recibe dos parametros, la posicion a eliminar y los elementos  apartir de esa posicion que se van a eliminar :D
    return{message:`Product with id: ${id} was deleted`}
  }

}

module.exports = ProductsService;
