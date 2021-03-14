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

export const button = css`
    margin: 0.5em;
    padding: 0.7em 7em;
    display: inline-block;
    background-color: #3F98FF;
    border-color: #3F98FF;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    line-height: 1.5;
    border-radius: .25rem;
    border: none;
    &:focus {
        color: white;
        outline-color: #3F98FF;
`;