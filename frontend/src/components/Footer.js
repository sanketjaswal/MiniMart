import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <FooterCont>
      <FooterInner>
        <FooterSection>
          <a href="https://www.linkedin.com/in/sanket-jaswal/">
            <Head>Sanket Jaswal</Head>
          </a>
          <p>
            <a href="https://github.com/sanketjaswal/MiniMart">
              <strong>Mini Mart</strong>{' '}
            </a>
             - Made for Interview Purposes .
          </p>
          <p>The data used in this project is sourced from
          <a href="https://www.nyuctech.com/index.html">
              <strong> © Nyuc Tech</strong>{' '}
            </a>
            .</p>
        </FooterSection>
        <FooterSection>
          <h4>Quick Links</h4>
          <FooterLinks>
            <a href="/">Home</a>
            <a href="/cart">Cart</a>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <h3></h3>
          <h4>Follow Me</h4>
          <FooterLinks>
            <a href="https://github.com/sanketjaswal">Github</a>
            <a href="https://leetcode.com/u/sanketjaswal/">LeetCode</a>
            <a href="https://codepen.io/sanketjaswal">CodePen</a>
          </FooterLinks>
        </FooterSection>
      </FooterInner>
    </FooterCont>
  )
}

const FooterCont = styled.div`
  background-color: rgb(28, 28, 28);
  color: white;
  padding: 20px 0;
  text-align: center;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.15);
`

const Head = styled.h1`
  margin-bottom: 16px;
  text-shadow: 0 3px 1px #0ea5e9;
  transition: all.3s;
  cursor: pointer;

  &:hover {
    color: #0ea5e9;
    text-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`

const FooterInner = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  padding: 10px;
  @media (max-width: 768px) {
   flex-direction: column;
    }
`

const FooterSection = styled.div`
  margin: 10px 0;
  h3,
  h4 {
    margin-bottom: 8px;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
        color: #0ea5e9;
        text-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
  }

  strong {
    text-shadow: 0 2px 1px #0ea5e9;
    font-size: 17px;
    &:hover {
        color: #0ea5e9;
        text-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
  }
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: white;
    text-decoration: none;
    margin: 6px 0;
    &:hover {
      /* text-decoration: underline; */
      color: #0ea5e9;
    }
  }
  
`
