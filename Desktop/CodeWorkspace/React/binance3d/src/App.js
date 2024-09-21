import "./styles.css";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Logo from "./images/logo_binance_full.svg";
import IconArrowRight from "./images/arrow_right.svg";

export default function App() {
  return (
    <Wrapper>
      <SplineWrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/ZZcZOJoxFoldppbp/scene.splinecode"
        />
      </SplineWrapper>
      <Content>
        <Menu>
          <li>
            <img src={Logo} alt="Logo" />
          </li>
          <li>
            <a href="/">Buy Crypto</a>
          </li>
          <li>
            <a href="/">Markets</a>
          </li>
          <li>
            <a href="/">Trade</a>
          </li>
          <li>
            <a href="/">Futures</a>
          </li>
        </Menu>
        <h1>Trade on the go. Anywhere, anytime.</h1>
        <p>
          Join over 212,684,190 users who trust us. Start earning today and
          experience seamless trading with Binance, the world's leading
          cryptocurrency exchange.
        </p>
        <button>
          Get Started
          <img src={IconArrowRight} alt="get started" />
        </button>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #fff;
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const SplineWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .spline {
    width: 100%;
    height: 100%;

    @media (max-width: 1536px) {
      transform: translateX(200px);
    }
    @media (max-width: 1024px) {
      transform: translateX(300px);
    }
    @media (max-width: 960px) {
      transform: translateY(200px);
    }
    @media (max-width: 600px) {
      transform: translateY(-200px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  pointer-events: none;

  @media (max-width: 960px) {
    gap: 40px;
  }

  h1 {
    font-weight: bold;
    font-size: 70px;
    line-height: 120%;
    margin: 0;
    max-width: 600px;

    @media (max-width: 960px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 350px;
    }
  }
  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 300px;
  }
  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 20px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    transition: 1s;
    pointer-events: auto;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0);
      background: #f0b90b;
    }
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 600px) {
      margin: 0 30px 0 30px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;
  pointer-events: auto;

  @media (max-width: 600px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;
    
    img{
      padding-top: 8px;
    }

    a {
      text-decoration: none;
      color: #fff;
      padding: 8px 0;
      margin: 0 20px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;
      border-radius: 14px;
      position:relative;
      
    &::after {
        content: "";
        display: block;
        width: 0;
        height: 3px;
        background: rgba(240, 185, 11, 0);
        transition: width 0.3s ease, background-color 0.3s ease;
        position: absolute;
        bottom: 4px;
        left: 0;
      }
      &:hover::after {
        width: 100%;
        background: rgba(240, 185, 11, 1);
      }

    }
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    li: nth-child(2),
    li: nth-child(3),
    li: nth-child(4),
    li: nth-child(5) {
      display:none;
    }
  }
`;
