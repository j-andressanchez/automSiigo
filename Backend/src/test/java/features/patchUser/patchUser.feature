Feature: Actualizar parcialmente un usuario con PATCH

  Background:
    * url urlBase

  Scenario: Actualizar solo el trabajo de un usuario existente
    Given path 'users/2'
    And header x-api-key = 'reqres-free-v1'
    And request { job: 'Q Engineer' }
    When method patch
    Then status 200
    And match response contains { job: 'Q Engineer' }