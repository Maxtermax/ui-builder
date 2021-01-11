# ui-builder
This is a implementation of the 'Builder' pattern, implementing a dynamic contact form.

## Requeriments
- nodejs >= 14
- typescrypt = 4.1.3

## Usage
In order to 

`npm run start`

output: 

Contact form object with fields: name, email.

```
{ name: 
   Input {
     name: 'name',
     value: '',
     type: 'text',
     label: '',
     required: false,
     id: '',
     disabled: false,
     dependOf: '' },
  email: 
   Input {
     name: 'email',
     value: '',
     type: 'email',
     label: '',
     required: false,
     id: '',
     disabled: false,
     dependOf: '' } }
```
