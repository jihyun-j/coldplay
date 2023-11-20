import { createGlobalStyle } from "styled-components";
// #ffef66, #C70039

const GlobalStyle = createGlobalStyle`

body {
        background-image: url('https://images.unsplash.com/photo-1548284706-24b96b23d6d8?q=80&w=2303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') ;
        background-repeat: no-repeat ;
        background-size: cover ;
        color: #fff ;
        font-family: 'Cormorant Garamond', serif;
        /* backdrop-filter: contrast(40%); */
    }

button {
    background-color: #ffef66;
    width: 80px ;
    padding: 8px 10px ;
    border:  2px solid #ffef66;
    border-radius: 50px ;
    background-color: transparent ;
    color: #ffef66
}
 
`;

export default GlobalStyle;
