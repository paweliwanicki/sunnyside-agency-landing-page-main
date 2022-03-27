import React from "react";
import styled, { css } from "styled-components";
import CustomImage from "../utils/CustomImage";
import CssVariables from "../../utils/CssVariables";
import { mediaQueries } from "../../utils/mixins";
import propTypes from "prop-types";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 5px;
  min-width: 240px;

  ${mediaQueries.laptopS`
    margin-bottom: 64px;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`;

const Paragraph = styled.p`
  color: ${CssVariables.ColorGrayDark};
  text-align: inherit;
  margin-bottom: 69px;
  font-weight: ${CssVariables.FontWeight600};
  line-height: 32px;
  max-width: 340px;
  font-size: 18px;
  letter-spacing: -0.13px;

  ${mediaQueries.laptopS`
    margin-bottom: 32px;
  `};

  ${mediaQueries.laptopM`
    font-size: 1em;
    `}

  ${mediaQueries.laptopS`
    font-size: 18px;
    `}
`;
const UserInfo = styled.div`
  text-align: center;
`;

const UserFullname = styled.p`
  font-weight: ${CssVariables.FontWeight900};
  font-family: ${CssVariables.FontFamilyFraunces};
  margin-bottom: 9px;
  font-size: 18px;
  line-height: 22px;
`;

const UserPosition = styled.p`
  color: ${CssVariables.colorGrayLight};
  font-size: 14px;
  font-weight: ${CssVariables.FontWeight600};
  line-height: 25px;
`;

const customImageStyles = css`
  border-radius: 50%;
  max-width: 72px;
  margin-bottom: 58px;
  width: initial;
  height: auto;
  ${mediaQueries.laptopS`
    margin-bottom: 32px;
  `};
`;

const TestimonialBox = (props) => {
  return (
    <StyledDiv>
      <CustomImage image={props.user.photo} customCss={customImageStyles} />
      <Paragraph>{props.user.testimonial}</Paragraph>
      <UserInfo>
        <UserFullname>{props.user.fullname}</UserFullname>
        <UserPosition>{props.user.position}</UserPosition>
      </UserInfo>
    </StyledDiv>
  );
};

TestimonialBox.propTypes = {
  user: propTypes.object.isRequired,
};

export default TestimonialBox;
