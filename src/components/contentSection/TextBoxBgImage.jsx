import React from "react";
import styled from "styled-components";

const TextBoxBgImageDiv = styled.div`
  background-image: ${(props) =>
    props.backgroundImg ? `url(${props.backgroundImg})` : ""};
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : "")};
  grid-row: ${(props) => (props.gridRow ? props.gridRow : "")};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 24.875em;
  display: flex;
  flex-flow: column;
  text-align: center;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => (props.color ? props.color : "#24303e")};
`;

const Header = styled.h2`
  font-family: "Fraunces", serif;
  font-weight: 900;
  width: 21.25em;
  margin-top:0 ;
  font-size: 1.75em;
  margin-bottom: 1em;
  line-height: 2.1575em;

`;

const Paragraph = styled.p`
  margin: 0;
  line-height:1.6875em;
  width: 21.25em;
  font-weight:600;
`;

const TextBoxBgImage = (props) => {
  return (
    <TextBoxBgImageDiv
      backgroundImg={props.backgroundImg}
      gridColumn={props.gridColumn}
      gridRow={props.gridRow}
      color={props.color}
    >
      <Header className="text">{props.headerText}</Header>
      <Paragraph>{props.text}</Paragraph>
    </TextBoxBgImageDiv>
  );
};

export default TextBoxBgImage;
