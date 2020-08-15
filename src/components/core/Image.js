import styled from "styled-components/native";

export const Image = styled.Image`
  ${props => props.margin && `margin:${props.margin}`};
  ${props => props.marginTop && `margin-top:${props.marginTop}px`};
  ${props => props.marginRight && `margin-right:${props.marginRight}px`};
  ${props => props.marginBottom && `margin-bottom:${props.marginBottom}px`};
  ${props => props.marginLeft && `margin-left:${props.marginLeft}px`};
  ${props => props.height && `height:${props.height}px`};
  ${props => props.width && `width:${props.width}px`};
`;