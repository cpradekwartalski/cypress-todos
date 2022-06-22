declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to visit vannila js app and verify page.
       * @example cy.dataCy('greeting')
       */
       initTodosApplication(): Chainable<any>;
    }
  }