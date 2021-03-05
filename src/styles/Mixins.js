import { css } from 'styled-components';
import { mediaMin } from '../styles/MediaQueries';

export const wrapper = css`
    display: flex;
`;

export const container = css`
    z-index: 2;
    position: relative;
    width: auto;
    height: auto;
    margin-right: auto;
    margin-left: auto;
    ${mediaMin.phone`
        max-width: 540px;
    `};
    ${mediaMin.tablet`
        max-width: 720px;
    `};
    ${mediaMin.desktop`
        max-width: 960px;
    `}; 
    ${mediaMin.menuMax`
        max-width: 1140px;
    `};
`;

export const row = css`
    display: flex;
`;