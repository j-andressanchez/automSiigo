Feature: Actualizar usuario

  Background:
    * url urlBase

  Scenario: Actualizar datos de un usuario
    Given path 'users/2'
    And header x-api-key = 'reqres-free-v1'
    And request { name: 'Andres', job: 'Q Engineer' }
    When method put
    Then status 200
    And match response.name == 'Andres'