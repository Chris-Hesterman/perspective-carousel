/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
import React from 'react';
import { mount } from '@cypress/react';
import Carousel from '../../src/components/Carousel/Carousel';
import { wait } from '@testing-library/dom';

describe('My first Cypress test', () => {
  it('does not do much', () => {
    expect(2 + 2).to.equal(4);
  });
  it('is just a hello world example', () => {
    expect(true).not.to.be.false;
  });
});

describe('testing cypress mount', () => {
  const testProps2 = {
    number: 12,
    width: 15,
    height: 10,
    margin: 0,
    zAxis: 0
  };
  it('renders the Carousel component', () => {
    mount(<Carousel {...testProps2} />);
    const carousel = cy.get('[data-cy=carousel]');
    carousel.should('have.length', 1);
    carousel.click();
  });
});
