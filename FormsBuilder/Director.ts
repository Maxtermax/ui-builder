import Builder from './interfaces/Builder';
import Input from './Fields/Input';

export default class Director {
  builder: Builder; 

  setBuilder(builder: Builder) {
    this.builder = builder;
  }

  makeContactForm() {
    this.builder.reset();
    this.builder.setLayout('colum');
    this.builder.setField(new Input({
      name: 'name',
      label: 'Name*',
      type: 'text',
      placeholder: 'Type your name here.',
      required: true,
    }));

    this.builder.setField(new Input({
      name: 'email',
      label: 'Email*',
      type: 'email',
      placeholder: 'Type your email here.',
      required: true,
    }));

    return this.builder.getProduct();
  }
}

