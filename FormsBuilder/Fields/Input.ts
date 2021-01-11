import Field from '../interfaces/Field';
import EventListener from '../interfaces/EventListener';

export default class Input implements Field {
  name: string = '';
  value: string = '';
  type: string = 'text';
  label: string = '';
  required: boolean = false;
  id: string = '';
  disabled: boolean = false;
  dependOf: string = '';
  placeholder: string;
  listeners: EventListener[];
  constructor(initialValue: Field) {
    this.populate(initialValue);
  }
  
  populate(initialValue: Field) {
    if (initialValue.name) this.name = initialValue.name;
    if (initialValue.value) this.value = initialValue.value;
    if (initialValue.id) this.id = initialValue.id;
    if (initialValue.disabled) this.disabled = initialValue.disabled;
    if (initialValue.dependOf) this.dependOf = initialValue.dependOf;
    if (initialValue.listeners) this.listeners = initialValue.listeners;
    if (initialValue.type) this.type = initialValue.type;
    if (initialValue.validator) this.validator = initialValue.validator;
  }
  
  validator(): boolean {
    return true;
  }
}
