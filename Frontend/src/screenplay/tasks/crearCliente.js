import { dynamicLocators } from "#screenplay/pages/dynamicLocators.js";
import BrowseTheWeb from "../abilities/browseTheWeb.js";
import { CrearTerceroPage } from "../pages/CrearTerceroPage.js"

export default class CrearCliente {
  constructor(data) {
      this.data = data;
  }

  static withData(data) {
      return new CrearCliente(data);
  }

  async performAs(actor) {
      const page = actor.abilityTo(BrowseTheWeb).page;

      await CrearTerceroPage.tipoClienteDropdown(page).waitFor({ state: 'visible' });
      await CrearTerceroPage.tipoClienteDropdown(page).click();
      await CrearTerceroPage.dropdownOptions(page, 'Es persona').click();
      await CrearTerceroPage.tipoDocDropdown(page).waitFor({ state: 'visible' });
      await CrearTerceroPage.tipoDocDropdown(page).click();
      await CrearTerceroPage.dropdownOptions(page, 'Cédula de ciudadanía').waitFor({ state: 'visible' });
      await CrearTerceroPage.dropdownOptions(page, 'Cédula de ciudadanía').click();
      await CrearTerceroPage.identificationTextbox(page).fill(this.data.identificacion);
      await CrearTerceroPage.nombresTextbox(page).fill(this.data.nombres),
      await CrearTerceroPage.apellidosTextbox(page).fill(this.data.apellidos),

      await CrearTerceroPage.activadorCity(page).click();
      await CrearTerceroPage.cityTextBox(page).waitFor({ state: 'visible' })
      await CrearTerceroPage.cityTextBox(page).click();
      await CrearTerceroPage.cityTextBox(page).type(this.data.ciudad, { delay: 100 });
      await CrearTerceroPage.cityOption(page, this.data.ciudad).click();

      await CrearTerceroPage.direcciónTextbox(page).fill(this.data.direccion);
      await CrearTerceroPage.indicativoTextbox(page).fill(this.data.indicativo);
      await CrearTerceroPage.telefonoTextbox(page).fill(this.data.telefono);
      await CrearTerceroPage.contactEmailTextbox(page).fill(this.data.email);
      await CrearTerceroPage.tipoRegimenDropdown(page).click();
      await CrearTerceroPage.dropdownOptions(page, this.data.regimen).click();
      await CrearTerceroPage.contactIndicativeTextbox(page).fill(this.data.indicativo);
      await CrearTerceroPage.contactTelefonoTextbox(page).fill(this.data.telefono);
      await CrearTerceroPage.contactCodPostalTextbox(page).fill(this.data.codPostal);
      await CrearTerceroPage.seleccionarResponsabilidadFiscal(page, this.data.respFiscal);

      await CrearTerceroPage.contactosCard(page).click();
      await CrearTerceroPage.contactosNombreTextbox(page).fill(this.data.nombres),
      await CrearTerceroPage.contactosApellidoTextbox(page).fill(this.data.apellidos),
      await CrearTerceroPage.contactosEmailTextbox(page).fill(this.data.email);
      await CrearTerceroPage.contactosCargoTextbox(page).fill(this.data.cargo);
      await CrearTerceroPage.contactosIndicativoTextbox(page).fill(this.data.indicativo);
      await CrearTerceroPage.contactosNoTelefonoTextbox(page).fill(this.data.telefono);

      await CrearTerceroPage.guardarButton(page).click();
  }

}
