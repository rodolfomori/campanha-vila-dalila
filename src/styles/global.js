import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:0;
}

*:focus{
  outline:0;
}

html,body, #root {
  height:100%
}

body {
    background: #e4e5e6 no-repeat center top;
  -webkit-font-smoothing: antialiased;
  }

body,input,button,h1,p{
  font:14px 'Roboto', sans-serif;
}

a{
  text-decoration:none;
}

ul{
  list-style:none;
}

li {
  list-style-type: none;
}

button{
  cursor:pointer;
}

`;
