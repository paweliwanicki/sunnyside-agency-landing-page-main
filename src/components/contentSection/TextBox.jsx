import React from "react";
import styled from "styled-components";

const TextBoxDiv = styled.div`
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : "")};
  grid-row: ${(props) => (props.gridRow ? props.gridRow : "")};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  flex-flow: column;
  padding-top: 8.65em;
  padding-right: ${(props) =>
    props.gridColumn === "1/3" ? "6.875em" : "10.3125em"};
  padding-left: ${(props) =>
    props.gridColumn === "3/5" ? "6.875em" : "10.3125em"};
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  color: #808397;
  line-height: 1.7em;
  font-size: 1.1375em;

  a {
    color: #24303e;
    font-weight: 900;
    font-size: 0.95em;
    text-decoration: none;
    font-family: "Fraunces", serif;
    &:hover {
      text-decoration: none;
    }
  }
`;

const Header = styled.h2`
  font-weight: 900;
  font-size: 2.5em;
  line-height: 1.075em;
  font-family: "Fraunces", serif;
  color: #24303e;
  margin-top: 0;
  margin-bottom: 0.7em;
`;

const Paragraph = styled.p`
  margin-bottom: 2.5em;
  margin-top: 0;
`;

const TextBox = (props) => {
  return (
    <TextBoxDiv gridColumn={props.gridColumn} gridRow={props.gridRow}>
      <Header>{props.headerText}</Header>
      <Paragraph>
        {props.text}
      </Paragraph>
      <a href="#test">LEARN MORE</a>
      {props.children}
    </TextBoxDiv>
  );
};

export default TextBox;
