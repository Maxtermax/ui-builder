import Director from './FormsBuilder/Director';
import FormsBuilder from './FormsBuilder/Builder';

const director = new Director();
const builder = new FormsBuilder();
director.setBuilder(builder);
director.makeContactForm();
const product = builder.getProduct();
console.log(product.fields);
