import { todosComponent } from "../../selectors/todosComponent";
import { todosActions } from "../actions/todosActions"

export const todosFlows = {
    addItemsToListAndVerify: (itemsList: string []): void => {
        const itemListLenght = itemsList.length;

        itemsList.forEach((item, index) => {
            todosActions.insertAndConfirmValue(item);
            todosActions.assertElementFromListContainsText(index, item);
        })
        todosActions.assertElementsListCount(itemListLenght);
        todosActions.assertItemsOnListCounter(itemListLenght);
    },

    toogleItemsAndVerify: (listItemsIndexes: number []): void => {
        listItemsIndexes.forEach( (itemIndex) => {
            todosActions.checkElementInList(itemIndex);
            todosActions.assertElementInListIsToggled(itemIndex);
        })
    }
}