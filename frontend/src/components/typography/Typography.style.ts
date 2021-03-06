import styled from 'styled-components';
import {PRIMARY, SECONDARY} from '../../styles';
import {ColorTypeKey} from '../../styles/theme';
import { Link } from 'react-router-dom'
import { PRIMARY_TYPOGRAPHY, SECONDARY_TYPOGRAPHY } from '../../styles/Typography'

export type TextAlign = 'left' | 'right' | 'center' | undefined;

export type Tag = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a' | 'div';

export const components = {
  h1: styled.h1<{align: string; $oneLine: boolean; color: ColorTypeKey;}>`
    font-size: 32px;
    font-weight: 800;
    line-height: 1.25;
    font-family: ${PRIMARY_TYPOGRAPHY};
    white-space: ${props => props.$oneLine === true ? 'nowrap' : 'normal'};
    margin: 0;
    color: ${props => props.color === 'primary' ? PRIMARY : SECONDARY};
    text-align: ${props => (props.align ? props.align : 'left')};
  `,
  h2: styled.h2<{align: string; $oneLine: boolean; color: ColorTypeKey;}>`
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
    font-family: ${PRIMARY_TYPOGRAPHY};
    white-space: ${props => props.$oneLine === true ? 'nowrap' : 'normal'};
    margin: 0;
    color: ${props => props.color === 'primary' ? PRIMARY : SECONDARY};
    text-align: ${props => (props.align ? props.align : 'left')};
  `,
  h4: styled.h4<{align: string; $oneLine: boolean; color: ColorTypeKey;}>`
    font-size: 14px;
    font-weight: 600;
    line-height: 1.25;
    font-family: ${PRIMARY_TYPOGRAPHY};
    white-space: ${props => props.$oneLine === true ? 'nowrap' : 'normal'};
    margin: 0;
    color: ${props => props.color === 'primary' ? PRIMARY : SECONDARY};
    text-align: ${props => (props.align ? props.align : 'left')};
  `,
  bodyMedium: styled.p<{align: string; $oneLine: boolean; color: ColorTypeKey; font: 'header';}>`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    font-family: ${props => props.font === 'header' ? PRIMARY_TYPOGRAPHY : SECONDARY_TYPOGRAPHY};
    white-space: ${props => props.$oneLine === true ? 'nowrap' : 'normal'};
    margin: 10px 0;
    color: ${props => props.color === 'primary' ? PRIMARY : SECONDARY};
    text-align: ${props => (props.align ? props.align : 'left')};
  `,
  bodySmall: styled.p<{align: string; $oneLine: boolean; color: ColorTypeKey; font: 'header';}>`
    font-size: 13px;
    font-weight: 500;
    line-height: 1.5;
    font-family: ${props => props.font === 'header' ? PRIMARY_TYPOGRAPHY : SECONDARY_TYPOGRAPHY};
    white-space: ${props => props.$oneLine === true ? 'nowrap' : 'normal'};
    margin: 5px 0;
    color: ${props => props.color === 'primary' ? PRIMARY : SECONDARY};
    text-align: ${props => (props.align ? props.align : 'left')};
  `,
  bodyLarge: styled.p<{align: string; $oneLine: boolean; color: ColorTypeKey; font: 'header';}>`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    font-family: ${props => props.font === 'header' ? PRIMARY_TYPOGRAPHY : SECONDARY_TYPOGRAPHY};
    white-space: ${props => props.$oneLine === true ? 'nowrap' : 'normal'};
    margin: 10px 0;
    color: ${props => props.color === 'primary' ? PRIMARY : SECONDARY};
    text-align: ${props => (props.align ? props.align : 'left')};
  `,
  caption: styled.span<{align: string; $oneLine: boolean; color: ColorTypeKey; font: 'header';}>`
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    font-family: ${props => props.font === 'header' ? PRIMARY_TYPOGRAPHY : SECONDARY_TYPOGRAPHY};
    white-space: ${props => props.$oneLine === true ? 'nowrap' : 'normal'};
    margin: 0;
    color: ${props => props.color === 'primary' ? PRIMARY : SECONDARY};
    text-align: ${props => (props.align ? props.align : 'left')};
  `,
  link: styled.a<{align: string; $oneLine: boolean; color: ColorTypeKey; font: 'header';}>`
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    font-family: ${props => props.font === 'header' ? PRIMARY_TYPOGRAPHY : SECONDARY_TYPOGRAPHY};
    white-space: ${props => props.$oneLine === true ? 'nowrap' : 'normal'};
    margin: 0;
    text-decoration: underline;
    color: ${props => props.color === 'primary' ? PRIMARY : SECONDARY};
    text-align: ${props => (props.align ? props.align : 'left')};
    :hover {
      color: ${props => props.color === 'primary' ? SECONDARY : PRIMARY};;
    }
  `,
  internalLink: styled(Link)<{align: string; $oneLine: boolean; color: ColorTypeKey; font: 'header'; $size: 'large'}>`
  font-size: ${props => props.$size === 'large' ? '24px' : '13px'};
  font-weight: 400;
  line-height: 1.5;
  font-family: ${props => props.font === 'header' ? PRIMARY_TYPOGRAPHY : SECONDARY_TYPOGRAPHY};
  white-space: ${props => props.$oneLine === true ? 'nowrap' : 'normal'};
  margin: 0;
  text-decoration: underline;
  color: ${props => props.color === 'primary' ? PRIMARY : SECONDARY};
  text-align: ${props => (props.align ? props.align : 'left')};
  :hover {
    color: ${props => props.color === 'primary' ? SECONDARY : PRIMARY};;
  }
`,
};

export type Variant = keyof typeof components;

export type Color = 'main' | undefined;

export const variantTagMap: {[K in Variant]: Tag} = {
  bodyMedium: 'p',
  bodySmall: 'p',
  bodyLarge: 'p',
  h1: 'h1',
  h2: 'h2',
  h4: 'h4',
  caption: 'span',
  link: 'a',
  internalLink: 'a'
};
