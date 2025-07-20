export const TopbarPage = {
    crearButon: page => page.getByRole('button', { name: /Crear$/ }),
    clientesLink: page => page.getByRole('link', { name: 'Clientes', exact: true })
}