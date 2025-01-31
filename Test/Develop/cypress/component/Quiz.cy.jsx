import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../../src/components/Quiz';

describe('Quiz Component', () => {
  it('renders the quiz component', () => {
    mount(<Quiz />);
    cy.get('[data-cy=quiz-container]').should('exist');
  });

  it('starts the quiz when the start button is clicked', () => {
    mount(<Quiz />);
    cy.get('[data-cy=start-button]').click();
    cy.get('[data-cy=question]').should('exist');
  });

  it('displays the final score after completing the quiz', () => {
    mount(<Quiz />);
    cy.get('[data-cy=start-button]').click();
    // Simulate answering questions
    cy.get('[data-cy=answer-option]').first().click({ multiple: true });
    cy.get('[data-cy=submit-button]').click();
    cy.get('[data-cy=final-score]').should('exist');
  });
});