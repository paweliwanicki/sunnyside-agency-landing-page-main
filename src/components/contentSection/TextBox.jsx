import React from "react";
import styled from "styled-components";
import Breakpoints from "../../utils/Breakpoints";
import CssVariables from "../../utils/CssVariables";
import respondTo from "../../utils/Mixins";

const TextBoxDiv = styled.div`
  grid-column: ${(props) =>
    props.desktopGridColumn ? props.desktopGridColumn : ""};
  grid-row: ${(props) => (props.desktopGridRow ? props.desktopGridRow : "")};
  display: flex;
  align-items: ${(props) =>
    props.desktopGridColumn === "1/3" ? "flex-end" : "flex-start"};
  justify-content: center;
  text-align: inherit;
  flex-flow: column;
  padding-right: ${(props) =>
    props.desktopGridColumn === "1/3" ? "6.875em" : ""};
  padding-left: ${(props) =>
    props.desktopGridColumn === "3/5" ? "6.875em" : ""};
  font-family: ${CssVariables.FontFamilyBarlow};
  font-weight: ${CssVariables.FontWeight600};
  color: ${CssVariables.ColorGray};
  line-height: 1.7em;
  font-size: 1.1375em;

  @media screen and (max-width: 45em) {
    grid-column: ${(props) =>
      props.mobileGridColumn ? props.mobileGridColumn : ""};
    grid-row: ${(props) => (props.mobileGridRow ? props.mobileGridRow : "")};

    padding-top: 4em;
    padding-bottom: 4em;
    margin-left: 1.25em;
    margin-right: 1.25em;
    text-align: center;
  }

  ${respondTo(
    `(max-width: 84.375em)`,
    `
    padding-right:0;
    padding-left:0;
    align-items:center;
  `
  )}

  a {
    color: ${CssVariables.ColorDark};
    font-weight: ${CssVariables.FontWeight900};
    font-size: 0.95em;
    text-decoration: none;
    font-family: ${CssVariables.FontFamilyFraunces};
    &:hover {
      text-decoration: none;
    }
  }
`;

const Header = styled.h2`
  font-weight: ${CssVariables.FontWeight900};
  font-size: 2.5em;
  line-height: 1.075em;
  font-family: ${CssVariables.FontFamilyFraunces};
  color: ${CssVariables.ColorDark};
  margin-top: 0;
  margin-bottom: 0.7em;
  max-width: 9.8em;

  ${respondTo(
    Breakpoints.device.sm,
    `
    font-size: 1.87em;
    margin-left: auto;
    margin-right: auto;
  `
  )}
`;

const Paragraph = styled.p`
  margin-bottom: 2.5em;
  margin-top: 0;
  max-width: 24.5em;
`;

const ContentDiv = styled.div`
  width: fit-content;
  height: fit-content;

  ${respondTo(
    `(max-width: 33.75em)`,
    `
    margin:auto;
  `
  )}

  ${respondTo(
    `(min-width: 45.01em) and (max-width: 61.25em)`,
    `
    font-size:0.7em;
  `
  )}
`;

const TextBox = (props) => {
  return (
    <TextBoxDiv
      desktopGridColumn={props.desktopGridColumn}
      desktopGridRow={props.desktopGridRow}
      mobileGridRow={props.mobileGridRow}
      mobileGridColumn={props.mobileGridColumn}
    >
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
