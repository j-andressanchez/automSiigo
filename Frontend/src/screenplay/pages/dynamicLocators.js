export const dynamicLocators = {

    dropdownByLabel: (page, label) =>
        page.locator('siigo-dropdownlist-web').filter({ 
            has: page.getByText(label, { exact: true }) 
        }),

    textFieldByText: (page, text) =>
        page.locator('siigo-textfield-web').filter({ 
            hasText: text 
        }).getByRole('textbox'),

    dropdownOption: (page, optionText) => 
        page.getByRole('listitem').filter({ 
            hasText: optionText 
        }),

    elementByText: (page, text) =>
        page.getByText(text).click()

}