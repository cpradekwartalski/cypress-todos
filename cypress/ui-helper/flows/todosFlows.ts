import { Utils } from "../../support/utils";
import { todosActions } from "../actions/todosActions"

export const todosFlows = {
    addItemsToListAndVerify: (itemsList: string []): void => {
        const itemListLenght = itemsList.length;
        Utils.verifyIfNotEmpty(itemsList);

        itemsList.forEach((item, index) => {
            todosActions.insertAndConfirmValue(item);
            todosActions.assertElementFromListContainsText(index, item);
        })
        todosActions.assertElementsListCount(itemListLenght);
        todosActions.assertItemsOnListCounter(itemListLenght);
    },

    toogleItemsAndVerify: (listItemsIndexes: number []): void => {
        Utils.verifyIfNotEmpty(listItemsIndexes);

        listItemsIndexes.forEach( (itemIndex) => {
            todosActions.checkElementInList(itemIndex);
            todosActions.assertElementInListIsToggled(itemIndex);
        })
    }
}