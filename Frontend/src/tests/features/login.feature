Feature: Login Functionality As a user I want to log in to the application So that I can access my account

Scenario: Successful login 
Given the user navigates to the login page 
When the user logs in with username "ana@example.com" and password "Pass1234" 
Then the page title should be "Welcome"