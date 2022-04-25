import styled from "styled-components";
import {Link} from 'gatsby'

export const Button =styled(Link)`
background: ${({primary}) => (primary ? '#9ACD32': '#fff44f' )};
white-space: nowrap;
padding: ${({ big }) => (big ? '16px 40px':'10px 32px')};
    font-align: center;
    font-color:#fff;
font-size: ${({ big }) => (big ? '20px':'16px')};
outline: none;
border: none;
min-width: 100px;
cursor: pointer;
text-decoration: none;
transtion: 0.3s !important;
border-radius: ${({ round })=> (round ? '50px':'none')};
    font-color:#fff;
&:hover {
    background: ${({primary})=> (primary ? '#fff44f':'#9ACD32' )};
    font-color:#fff;
    transform: translateY(-2px);
}
`