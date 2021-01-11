import Field from './Field';
import Form from '../Form';

interface Builder {
  reset();
  getProduct(): Form;
  setField(field: Field);
  setSubmitButton();
  setCancelButton();
  setResetButton();
  setStyle();
  setSection();
  setCancelButtonDisabled();
  setSubmitButtonDisabled();
  setResetButtonDisabled();
  setLayout(type: string);
  setValidator();
}

export default Builder;
