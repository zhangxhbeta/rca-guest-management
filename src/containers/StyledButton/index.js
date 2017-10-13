import React, {Component} from 'react';

import styled, {css} from 'styled-components'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

export default class StyledButton extends Component {
  render() {
    return (
      <div>
        <h1>CSS in JS</h1>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </div>
    );
  }
}
