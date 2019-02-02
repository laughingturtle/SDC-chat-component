import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const EmoteBox = styled.span`
  height: 38px;
  width: 38px;
  display: block;
  text-align: center;
  &:hover {
    background-color: rgba(125,91,190,.2);
    cursor: pointer;
  }
`;

const EmoteImg = styled.img`
  padding-top: 4px;
  max-height: 28px;
  max-width: 28px;
`;

export const Emote = (props) => {
  return (
    <EmoteBox onClick={() => props.emoteClicked(props.phrase)}>
      <EmoteImg src={props.src} />
    </EmoteBox>
  );
};