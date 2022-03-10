import React from "react";
import styled from "styled-components";
import cssVariables from "../../utils/cssVariables";
import respondTo from "../../utils/Mixins";

const TextBoxDiv = styled.div`
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : "")};
  grid-row: ${(props) => (props.gridRow ? props.gridRow : "")};
  display: flex;
  align-items: ${(props) =>
    props.gridColumn === "1/3" ? "flex-end" : "flex-start"};
  justify-content: center;
  text-align: left;
  flex-flow: column;
  /* padding-top: 8.65em; */
  padding-right: ${(props) => (props.gridColumn === "1/3" ? "6.875em" : "")};
  padding-left: ${(props) => (props.gridColumn === "3/5" ? "6.875em" : "")};
  font-family: ${cssVariables.FONT_FAMILY_BARLOW};
  font-weight: ${cssVariables.FONT_WEIGHT_600};
  color: ${cssVariables.COLOR_GRAY};
  line-height: 1.7em;
  font-size: 1.1375em;

  ${respondTo(
    `(max-width: 1350px)`,
    `
    padding-right:0;
    padding-left:0;
  `
  )}

  a {
    color: ${cssVariables.COLOR_DARK};
    font-weight: ${cssVariables.FONT_WEIGHT_900};
    font-size: 0.95em;
    text-decoration: none;
    font-family: ${cssVariables.FONT_FAMILY_FRAUNCES};
    &:hover {
      text-decoration: none;
    }
  }
`;

const Header = styled.h2`
  font-weight: ${cssVariables.FONT_WEIGHT_900};
  font-size: 2.5em;
  line-height: 1.075em;
  font-family: ${cssVariables.FONT_FAMILY_FRAUNCES};
  color: ${cssVariables.COLOR_DARK};
  margin-top: 0;
  margin-bottom: 0.7em;
  max-width: 9.8em;
`;

const Paragraph = styled.p`
  margin-bottom: 2.5em;
  margin-top: 0;
  max-width: 24.5em;
`;

const ContentDiv = styled.div`
  width: fit-content;
  height: fit-content;
  text-align: left;

  ${respondTo(
    `(max-width: 1350px)`,
    `
    margin:auto;
  `
  )}
`;

const TextBox = (props) => {
  return (
    <TextBoxDiv gridColumn={props.gridColumn} gridRow={props.gridRow}>
      <ContentDiv>
        <Header>{props.headerText}</Header>
        <Paragraph>{props.text}</Paragraph>
        <a href="#test">LEARN MORE</a>
        {props.children}
      </ContentDiv>
    </TextBoxDiv>
  );
};

export default TextBox;
