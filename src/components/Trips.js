import React from 'react'
import styled from'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import {Button} from  "./Button";
import { ImPhone } from  "react-icons/im";
const Trips = ({heading}) => {
const data= useStaticQuery(graphql`
query myQueryAndMyQuery {
  allTripJson {
    edges {
      node {
        alt
        button
        name
        id
        img {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}
  `)
 function getTrips(data) {
    const tripsArray = []
    data.allTripJson.edges.forEach((item, index) => {
      tripsArray.push(
        <ProductCard key = {index}>
            <ProductImage GatsbyImage image= {item.node.img.childImageSharp.gatsbyImageData}
            alt={item.node.alt}
            />
        <ProductInfo>
          <TextWrap>
            <ImPhone/>
            <ProductTitle> {item.node.name}</ProductTitle>
          </TextWrap>
          <Button to ="/ride"
          primary="true"
          round="true" 
          css= {`
                position: absolute;
                top: 420px;
                font-size: 14px;
          `}
          >{item.node.button}</Button>
          </ProductInfo>
          </ProductCard>
      )
    })
 
return tripsArray  
}


  return (
    <ProductsContainer>
      <ProductHeading>{heading}</ProductHeading>
        <ProductWrapper>
         
    {getTrips(data)}
      
        </ProductWrapper>
      </ProductsContainer>
  )
}

export default Trips
  
const ProductsContainer= styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px) /2);
  color: #fff;
`
const ProductHeading= styled.div`
  font-size:clamp(1.2rem,5vw,3rem);
  text-align:center;
  margin-bottom:5rem;
  color:#000;
`
const ProductWrapper=styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px
  justify-items: center;
  padding: 0 2rem;
  @media screen and (max-width:1200px)
  {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width:868px)
  {
    grid-template-columns: 1fr ;
  }
`
const ProductCard=styled.div`
  line-height:2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius:10px;
  transition:0.2s ease;
`
const TextWrap=styled.div`
  display: flex;
  align-items:center;
  position:absolute;
  top: 375px; 
`
const ProductTitle=styled.div`
  font-weight:400;
  font-size: 1rem;
  margin_left: 0.5rem;
`
const ProductInfo=styled.div`
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  padding: 0 2rem;
  @media screen and (max-width:280px)
  {
    padding:0 1 rem
  }
`
const ProductImage =styled(GatsbyImage)`
  height:100%;
  max-width: 95%;
  position:absolute;
  border-radius:20px;
  filter: brightness(90%);
  transition: 0.4s cubic-bezier(0.075,0.82,0.165,1);
  &:hover{
    filter: brightness(140%);
  }
`