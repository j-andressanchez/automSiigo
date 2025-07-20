# Proyecto de Automatización E2E con Playwright, Cucumber y Screenplay

Este proyecto implementa pruebas automatizadas de extremo a extremo (E2E) usando Playwright como motor de automatización, Cucumber para definir escenarios en lenguaje natural y el patrón Screenplay para mantener un diseño modular y reutilizable.

## Tecnologías utilizadas

- **JavaScript (Node.js v20)**
- **Playwright**
- **Cucumber.js**
- **Screenplay Pattern**
- **ESM Modules**

## Estructura del proyecto

```
📁 src
 ┣ 📁 test                         
 ┃  ┣ 📁 data                      # Archivos JSON con data de prueba
 ┃  ┣ 📁 features                  # Escenarios escritos en Gherkin
 ┃  ┣ 📁 support                   # Hooks y definición del World de Cucumber
 ┃  ┗ 📁 steps                     # Definiciones de pasos (Step Definitions)

 ┗ 📁 screenplay
    ┣ 📁 tasks                    # Tareas principales del actor
    ┣ 📁 interactions             # Interacciones comunes y reutilizables
    ┣ 📁 abilities                # Habilidades que puede tener un actor (como navegar, autenticar, etc.)
    ┣ 📁 actors                   # Configuración y definición de los actores
    ┣ 📁 pages                    # Mapeo de elementos y páginas para Playwright
    ┗ 📁 questions                # Validaciones y preguntas que el actor puede hacer al sistema
```

## Escenarios actuales

- **Login exitoso**: El usuario navega a la página de login e inicia sesión con credenciales válidas.
- **Creación de cliente**: El usuario navega a la sección de creación de clientes, diligencia el formulario y valida que el registro fue exitoso mediante un toast de confirmación.

## Ejecución

1. Instalar dependencias:
```bash
    npm install
```

2. Ejecutar pruebas:
```bash
    npm test
```

## Consideraciones

- Las credenciales están configuradas por entorno (`Login.withEnvCredentials()`).
- La data del formulario proviene de un archivo JSON (`tests/data/cliente.json`).
- Asegúrate de tener configurado correctamente Playwright (puedes ejecutar `npx playwright install` si es la primera vez).

---
