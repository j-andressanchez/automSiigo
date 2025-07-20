export const LoginPage = {
    usernameInput: page => page.getByRole('textbox', { name: 'Correo electrónico *' }),
    passwordInput: page => page.getByRole('textbox', { name: 'Contraseña *' }),
    loginButton: page => page.getByRole('button', { name: 'Continuar' })
}