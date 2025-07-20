Feature: Flujo E2E para la gestión de usuarios

  Background:
    * url urlBase
    * configure headers = { x-api-key: 'reqres-free-v1' }

  Scenario: Flujo E2E para la gestión de un usuario
    # Crear usuario
    Given path 'users'
    And header x-api-key = 'reqres-free-v1'
    And request { name: 'Jhon Andres', job: 'Quality Engineer' }
    When method post
    Then status 201
    And match response contains { name: 'Jhon Andres', job: 'Quality Engineer' }
    * def userId = response.id

    # Se actualiza id por falta de permanencia de datos en ReqRes
    * def userId = 2

    # Actualizar parcialmente el usuario con PATCH
    Given path 'users', userId
    And request { job: 'Quality Architect' }
    When method patch
    Then status 200
    And match response contains { job: 'Quality Architect' }

    # Obtener información del usuario
    Given path 'users', userId
    When method get
    Then status 200

    # Eliminar el usuario
    Given path 'users', userId
    When method delete
    Then status 204

    * def userId = 23

    # Confirmar que el usuario ya no existe
    Given path 'unknown', userId
    When method get
    Then status 404