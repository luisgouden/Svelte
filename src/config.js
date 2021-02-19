
let Links = [
  { link: 'formacion', text: 'formacion' },
  { link: 'tienda', text: 'tienda' },
  { link: 'about', text: 'about me' }
];
let Layout = 'column';

let Landing = true;

if (Landing == true) {
  Layout = 'column';
};

const Config = {
  Links,
  Layout,
  Landing

}

export default Config;
