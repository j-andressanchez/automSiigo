Feature: Flujo de registro Cliente tercero en Siigo

Scenario: Successful login 
Given el usuario navega a la pagina de Login
When el usuario digita las credenciales correctas
And el usuario ingresa a la opción de crear Cliente
And el usuario diligencia el formulario
Then debe aparecer un toast de registro exitoso