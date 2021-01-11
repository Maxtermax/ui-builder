import EventListener from './EventListener';

interface Field {
  name: string;
  value?: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  id?: string;
  label?: string;
  disabled?: boolean;
  dependOf?: string;
  validator?(): boolean;
  listeners?: Array<EventListener>;
}

export default Field;
