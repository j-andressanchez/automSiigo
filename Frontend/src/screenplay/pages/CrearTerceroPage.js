import { dynamicLocators } from "./dynamicLocators.js";

export const CrearTerceroPage = {
    guardarButton: page => page.locator('button.button.green.filled', { hasText: 'Guardar' }),
    cancelarButton: page => page.locator('button.button.red', { hasText: 'Cancelar' }),

    tipoClienteDropdown: page => dynamicLocators.dropdownByLabel(page, 'Tipo'),
    tipoDocDropdown: page => dynamicLocators.dropdownByLabel(page, '* Tipo de identificación'),
    identificationTextbox: page => page.locator('#identification').getByRole('textbox'),
    completarDatosButton: page => page.getByText('Autocompletar datos'),
    nombresTextbox: page => dynamicLocators.textFieldByText(page, '* Nombres'),
    apellidosTextbox: page => dynamicLocators.textFieldByText(page, '* Apellidos'),

    activadorCity: page => page.locator('#labelAutocompleteSelectItemcity'),
    cityTextBox: page => page.locator('#inputAutocompletecity'),
    cityOption: (page, ciudad) => page.locator('div[id^="divTDAutocompletecity"]', { hasText: ciudad }),

    nombreComercialTextbox: page => dynamicLocators.textFieldByText(page, 'Nombre comercial'),
    direcciónTextbox: page => dynamicLocators.textFieldByText(page, 'Dirección'),
    indicativoTextbox: page => page.getByRole('textbox', { name: 'Indicativo' }),
    telefonoTextbox: page => page.locator('input[name="# de Teléfono"]'),

    contactEmailTextbox: page => page.locator('input[name="contactemail"]'),
    tipoRegimenDropdown: page => dynamicLocators.dropdownByLabel(page, 'Tipo de régimen IVA'),
    contactIndicativeTextbox: page => page.locator('input[name="indicativephone"]'),
    contactTelefonoTextbox: page => page.locator('input[name="contactphone"]'),
    contactCodPostalTextbox: page => dynamicLocators.textFieldByText(page, 'Código postal'),

    contactosCard: page => page.locator('app-third-party-contact h3', { hasText: 'Contactos' }),
    contactosNombreTextbox: page => page.locator('input[name="FirstName"]'),
    contactosApellidoTextbox: page => page.locator('input[name="LastName"]'),
    contactosEmailTextbox: page => page.getByRole('textbox', { name: 'Correo electrónico' }),
    contactosCargoTextbox: page => page.locator('input[name="Charge"]'),
    contactosIndicativoTextbox: page => page.locator('input[name="Indicative"]'),
    contactosNoTelefonoTextbox: page => page.locator('input[name="Number"]'),   
    
    dropdownOptions: (page, optionText) => dynamicLocators.dropdownOption(page, optionText),

    seleccionarResponsabilidadFiscal: async (page, nombre) => {
        const allIndicators = page.locator('label.control-checkbox .control_indicator');
        const count = await allIndicators.count();

        for (let i = 0; i < count; i++) {
            const indicator = allIndicators.nth(i);
            const label = indicator.locator('xpath=ancestor::label[1]');
            const checkbox = label.locator('input[type="checkbox"]');
            if (await checkbox.isChecked()) {
                await indicator.click();
            }
        }

        const targetIndicator = page.locator('label.control-checkbox', { hasText: nombre }).locator('.control_indicator');
        await targetIndicator.click();
    }

}
