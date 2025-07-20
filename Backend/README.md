# Proyecto de Automatización Backend - Karate + Reqres

Este proyecto realiza pruebas automatizadas sobre el servicio público [reqres.in](https://reqres.in), utilizando el framework **Karate DSL**. Se incluyen flujos completos de pruebas que cubren operaciones CRUD sobre el endpoint `/users`.

## 🧪 Funcionalidades probadas

- **POST**: Creación de usuarios.
- **PATCH**: Actualización parcial de un usuario.
- **GET**: Consulta de usuario por ID.
- **DELETE**: Eliminación de un usuario.
- **Validación**: Confirmación de que el usuario fue eliminado.

## 📁 Estructura del proyecto

```
project-root/
├── src/
│   └── test/
│       └── java/                            # Código fuente de pruebas
│           └── features/                    # Features Karate
├── karate-config.js                         # Configuración global de Karate
├── pom.xml                                  # Configuración Maven
├── README.md                                # Este archivo
```

## ▶️ Ejecución

Puedes ejecutar los tests desde línea de comandos con:

```bash
    mvn test
```

Esto generará un reporte HTML en:

```
target/karate-reports/karate-summary.html
```

## ✅ Requisitos

- Java 23
- Maven 3.x
- Karate 1.5.1 (configurado en el `pom.xml`)

## 📌 Notas

- Se utiliza el header `x-api-key: reqres-free-v1` requerido por la API.
- La API es de demostración, por lo que los cambios no persisten en el backend real.