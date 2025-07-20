Feature: Consultar usuario

  Background:
    * url urlBase

  Scenario: Obtener usuario existente
    Given path 'users/2'
    And header x-api-key = 'reqres-free-v1'
    When method get
    Then status 200
    And match response.data.id == 2
