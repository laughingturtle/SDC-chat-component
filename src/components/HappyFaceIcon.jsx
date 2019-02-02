import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const IconContainer = styled.span`
  position: absolute;
  right: 4px;
  top: 4px;
  height: 21px;
  width: 21px;
  border: 1px solid transparent;
  transition: all 0.1s ease;
  &:hover {
    background: rgba(100,65,164,0.5);
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.3;
  }
`;

const Path = styled.path`
  fill: #6441a4;
`;

export const HappyFaceIcon = (props) => {
  return (
    <IconContainer onClick={props.clickHandler}>
      <svg
        width="20px"
        height="20px"
        version="1.1"
        viewBox="0 0 20 20"
        x="0px"
        y="0px"
      >
        <Path
          d="M10 1a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9m0 2c3.859 0 7 3.141 7 7s-3.141 7-7 7-7-3.141-7-7 3.141-7 7-7zm4 6a1 1 0 1 0-2 0 1 1 0 1 0 2 0zM8 9a1 1 0 1 0-2 0 1 1 0 1 0 2 0zm4.571 3H7.428c-.237 0-.428.168-.428.375C7 13.822 8.345 15 10 15c1.654 0 3-1.178 3-2.625 0-.207-.192-.375-.429-.375z"
          fill-rule="evenodd"
        />
      </svg>
    </IconContainer>
  );
};