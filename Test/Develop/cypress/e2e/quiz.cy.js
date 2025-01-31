// Test/Develop/cypress/e2e/quiz.cy.test.js

describe('Tech Quiz Application', () => {
    beforeEach(() => {
        cy.visit('/quiz'); // Adjust the URL based on your routing
    });

    it('should load the quiz page', () => {
        cy.contains('Start Quiz').should('be.visible');
    });

    it('should start the quiz', () => {
        cy.contains('Start Quiz').click();
        cy.url().should('include', '/quiz/start');
        cy.contains('Question 1').should('be.visible');
    });

    it('should answer questions and submit the quiz', () => {
        cy.contains('Start Quiz').click();
        
        // Answer all questions
        for (let i = 1; i <= 10; i++) {
            cy.get(`[data-cy=question-${i}]`).within(() => {
                cy.get('input[type=radio]').first().check();
            });
            if (i < 10) {
                cy.contains('Next').click();
            }
        }
        
        // Submit the quiz
        cy.contains('Submit Quiz').click();
        cy.url().should('include', '/quiz/results');
        cy.contains('Your Score').should('be.visible');
    });
});