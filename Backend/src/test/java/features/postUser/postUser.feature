Feature: Crear usuario en ReqRes

  Background:
    * url urlBase

  @Post
  Scenario: Crear usuario exitosamente
    Given path 'users'
    And header x-api-key = 'reqres-free-v1'
    And request { name: 'Andres', job: 'Automation' }
    When method post
    Then status 201
    And match response == { name: 'Andres', job: 'Automation', id: '#string', createdAt: '#string' }