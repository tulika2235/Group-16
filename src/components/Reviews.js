import React from 'react'
import styled from 'styled-components'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Reviews = () => {
const data= useStaticQuery(graphql`
query Reviews {
    allFile(filter: {ext: {regex: "/(jpg)/"}, name: {in: ["image1", "image2"]}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                originalImg
              }
            }
          }
        }
      }
    }
    
      
`)
  return (
    <ReviewContainer>
        <TopLine>
            Reviews
        </TopLine>
        <Description>
            What are our Women Riders saying?
        </Description>
        <ContentWrapper>
            <ColumnOne>
            <Review>
                <IoMdCheckmarkCircleOutline
                css={`color: #f9bfa8;
                                    font-size: 2rem;
                                    margin-buttom:1 rem;
                                    `}
                />
                <h3>Divya Singh</h3>
                <p>"I found your service a 5 star experience. 
                    Our flight was delayed by two hours, so I arrived at Delhi at 2am. 
                    I emailed the support address, and received a prompt reply saying the agent would update my driver. 
                    The driver was awaiting at the arrivals hall for me, when we finally got there. 
                    The women driver I communicated with was pleasant and cheerful.
                    I will definitely use your service again. Your service, and reliability, made a long stressful journey end positively. Thank you."
                 </p>
            </Review>

            <Review>
            <FaRegLightbulb css={`color: #3fffa8;
                                    font-size: 2rem;
                                    margin-buttom:1 rem;
                                    `}/>
                <h3>Sarla Ray</h3>
                <p>"Everything went perfectly! Incredibly punctual, friendly drivers, and a very fast customer service that answered my questions within minutes the night before my return trip. 
                    I highly recommend booking here, and will definitely do so again in the future."
                 </p>
            </Review>
            </ColumnOne>

            <ColumnTwo>
                {data.allFile.edges.map((image,key)=> (
            
                   < ReviewImage GatsbyImage key ={key} fluid={image.node.childImageSharp.fluid} 
                    />
                ))} 
            </ColumnTwo>
        </ContentWrapper>
     </ReviewContainer>
  )
}
export default Reviews

const ReviewContainer= styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding:5rem calc((100vw-1300px)/2);
    height:100%;
`
const TopLine= styled.div`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`
const Description= styled.div`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`
const ContentWrapper= styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding:0 2rem;
    @media screen and (max-width: 768px){
    grid-template-columns:1fr;
}
`
const ColumnOne= styled.div`
    display:grid;
    grid-template-rows: 1fr 1fr;
`
const Review= styled.div`
    padding-top: 1rem;
    padding-right: 2rem;
    h3{
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
     }
    p {
        color: #3b3b3b;
    }
`
const ColumnTwo=styled.div`
    display: grid;
    grid-template-rows: 2fr 2fr;
    margin-top: 2 rem;
    grid-gap: 10px;
    @media screen and [max-width: 508px]{
    grid-template-columns: 1fr;
        }
`

const ReviewImage =styled(GatsbyImage)`
height:50%;
max-width: 50%;
position: relative;
`