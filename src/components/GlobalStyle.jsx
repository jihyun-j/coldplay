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

    form{
        display: flex ;
        flex-direction: column ;
        justify-content: center ;
        align-items: center ;
        width: 800px ;
        gap: 10px ;
        margin: 0 auto ;
    }

    input::placeholder {
        color: #fd515d;
        font-style: italic;
    }
    
    form input {
        width: 100% ;
        background-color: transparent ;
        font-size: 50px ;
        outline: none ;
        color: #fff;
        border: none;
    }

    form input:focus {
        border-bottom: 1px solid #fff ;
    }

    button{
        font-family: 'Gothic A1', sans-serif;
        font-size:  16px;
        padding: 10px 20px ;
        color: #fff;
        background-color: #000 ;
        border: 1px solid #000 ;
        border-radius: 50px ;
    }
    
    button:hover {
        background-color: #ffd646 ;
        border: 1px solid #ffd646 ;
        color: #000;
    }

    li {
        color: #fff;
    }

    .container {
        display: flex ;
        gap: 20px;
        font-family: 'Gothic A1', sans-serif
    }
`;

export default GlobalStyle;
