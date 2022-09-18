import React from 'react'
import styled from "styled-components";
import cart from "../assets/img/cart.svg";
import upArrow from "../assets/img/upArrow.svg";
import chat from "../assets/img/chat.svg";
import { FlexBox } from './MainComponent';
const SideButtonStyled = styled.div`
width:30px;
height: 120px;
position: fixed;
top:20%;
right:2%;
    `
export default function SideButton({ ...props }) {
  return (
    <SideButtonStyled {...props}>
      <FlexBox direction="column" margin="0px" justify="space-between" height="100%">
        <img src={cart} alt="장바구니 버튼" width="30px" height="30px"></img>
        <img src={chat} alt="챗봇 버튼" width="25px" height="25px"></img>
        <img src={upArrow} alt="맨 위로 버튼" width="23px" height="23px"></img>
      </FlexBox>
    </SideButtonStyled>
  )
}
