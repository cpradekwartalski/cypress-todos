/// <reference types="cypress" />

import { EXAMPLES_VANILLA_JS } from "./url_routes";
import { headerComponent } from '../selectors/index'

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('initTodosApplication', () => {
    cy.visit(EXAMPLES_VANILLA_JS);
    cy.get(headerComponent.text.header).contains('todos')
    cy.url().should('equal', 'https://todomvc.com/examples/vanillajs/')
})