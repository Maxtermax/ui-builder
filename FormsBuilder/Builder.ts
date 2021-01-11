import Field from './interfaces/Field';
import Builder from './interfaces/Builder';
import Form from './Form';

export default class FormBuilder implements Builder {
  private form: Form;

  constructor() {
    this.reset();
  }

  getProduct() {
    return this.form;
  }

  setSubmitButton() {
    throw new Error('Method not implemented.');
  }
  setCancelButton() {
    throw new Error('Method not implemented.');
  }
  setResetButton() {
    throw new Error('Method not implemented.');
  }
  setStyle() {
    throw new Error('Method not implemented.');
  }
  setSection() {
    throw new Error('Method not implemented.');
  }
  setCancelButtonDisabled() {
    throw new Error('Method not implemented.');
  }
  setSubmitButtonDisabled() {
    throw new Error('Method not implemented.');
  }
  setResetButtonDisabled() {
    throw new Error('Method not implemented.');
  }
  setLayout(type: string) {
    this.form.layout = type;
  }
  setValidator() {
    throw new Error('Method not implemented.');
  }

  reset() {
    this.form = new Form();
    this.form.fields = {};
  };

  setField(field: Field) {
    const { name = '' } = field;
    this.form.fields[name] = field;
  }
}
