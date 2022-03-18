import React from "react";
import styled, { css } from "styled-components";
import CustomImage from "../utils/CustomImage";
import CssVariables from "../../utils/CssVariables";
import { mediaQueries } from "../../utils/Mixins";
import propTypes from 'prop-types';

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 0.9375em;
  min-width: 15em;

  ${mediaQueries.laptopS`
    margin-bottom: 4em;
  `}
`;

const Paragraph = styled.p`
  color: ${CssVariables.ColorGrayDark};
  text-align: inherit;
  margin-bottom: 4.3125em;
  font-weight: ${CssVariables.FontWeight600};
  line-height: 1.778em;
  max-width: 19.45em;
  font-size: 1.125em;
`;
const UserInfo = styled.div`
  text-align: center;
`;

const UserFullname = styled.p`
  font-weight: ${CssVariables.FontWeight900};
  font-family: ${CssVariables.FontFamilyFraunces};
  margin-bottom: 0.5em;
`;

const UserPosition = styled.p`
  color: ${CssVariables.colorGrayLight};
  font-size: 0.875em;
  font-weight: ${CssVariables.FontWeight600};
  line-height: 1.785em;
`;

const CustomImageStyles = css`
  border-radius: 50%;
  max-width: 4.5em;
  margin-bottom: 3.625em;
`;

const TestimonialBox = (props) => {
  return (
    <StyledDiv>
      <CustomImage
        src={props.user.photo}
        alt={props.user.fullname}
        customCss={CustomImageStyles}
      />
      <Paragraph>{props.text}</Paragraph>
      <UserInfo>
        <UserFullname>{props.user.fullname}</UserFullname>
        <UserPosition>{props.user.position}</UserPosition>
      </UserInfo>
    </StyledDiv>
  );
};

TestimonialBox.propTypes = {
  user : propTypes.object.isRequired,
  text : propTypes.string.isRequired
};

export default TestimonialBox;
