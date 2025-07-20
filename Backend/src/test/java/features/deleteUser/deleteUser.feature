Feature: Eliminar usuario

  Background:
    * url urlBase

  Scenario: Eliminar usuario
    Given path 'users/5'
    And header x-api-key = 'reqres-free-v1'
    When method delete
    Then status 204
