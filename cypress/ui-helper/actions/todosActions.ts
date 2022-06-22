import { todosComponent } from '../../selectors/todosComponent'

export const todosActions = {
    insertAndConfirmValue: (toDoItemText: string): void => {
        cy.get(todosComponent.inputs.addItemToTheList).type(`${toDoItemText}{enter}`);
    },

    checkElementInList: (ItemIndexInList: number): void => {
        cy.get('input.toggle').eq(ItemIndexInList).click();
    },

    assertElementFromListContainsText: (ItemIndexInList: number, toDoItemText: string): void => {
        if(ItemIndexInList < 0) {
            throw new Error('Item index has to be bigger then 0');
        }
        cy.get(todosComponent.elements.listItems)
            .eq(ItemIndexInList)
            .should('contain.text', toDoItemText);
    },

    assertElementsListCount: (expectedListCount: number): void => {
        if (expectedListCount > 0) {
            cy.get(todosComponent.elements.listItems)
                .should('have.length', expectedListCount);
        } else if(expectedListCount === 0) {
            cy.get(todosComponent.elements.listItems).should('not.be.visible');
        } else {
            throw new Error('List element shouldn not be less then zero')
        }
    },

    assertItemsOnListCounter: (expectedCounterValue: number): void => {
        if(expectedCounterValue < 0) {
            throw new Error('Counter allows only positive numbers');
        }
        cy.get(todosComponent.elements.counter).should('contain.text', expectedCounterValue);
    },

    assertElementInListIsToggled: (ItemIndexInList: number): void => {
        cy.get('input.toggle').eq(ItemIndexInList).should('be.checked');
        cy.get(todosComponent.elements.listItems).eq(ItemIndexInList).should('have.class', 'completed');
    }
}