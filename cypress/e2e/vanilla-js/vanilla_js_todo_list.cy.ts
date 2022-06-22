/// <reference types="cypress" />
import { EXAMPLES_VANILLA_JS } from '../../support/url_routes';
import { todosActions, todosFlows } from '../../ui-helper/index';

const resolution = {
  viewportWidth: 1920,
  viewportHeight: 1080,
}

describe('Vanilla JS todo list',
  resolution, () => {
    beforeEach('Visit vanilla js web app and load data', () => {
      cy.fixture('todos_data.json').as('todoItemsData');
      cy.initTodosApplication();
    })

    it('Test1', function () {
      const { todoItems } = this.todoItemsData;
      
      todosActions.insertAndConfirmValue(todoItems[0]);
      todosActions.insertAndConfirmValue(todoItems[1]);
      todosActions.assertElementFromListContainsText(0, todoItems[0]);
      todosActions.assertElementFromListContainsText(1, todoItems[1]);
      todosActions.assertElementsListCount(2);
      todosActions.assertItemsOnListCounter(2);
    })

    it('Test2', function () {
      const { todoItems } = this.todoItemsData;

      todosFlows.addItemsToListAndVerify(todoItems);
      todosFlows.toogleItemsAndVerify([0])
    })
  });
