# Rolando Sanchez 
This is a public repo with small test examples

The test here is cypress code and run as follow
1-Navigate to the test page (this case https://global.hitachi-solutions.com/)
2-Confirm the page load with an assertion
3-Expand search area and enter search string and execute run
4-Confirm URL is using search criteria
5-Validate
  -Results contain search criteria 
  -Results displayed
6-Navigate to the first item from the list
  -Check for url containing search criteria
  -Check for title containing search criteria

How to run
1-Open cypress on visual studio code and run npx cypress open
2-Search for the test on the tree and click on it, this will run automatically opening a new browser

Results
Check on Cypress Browser window to confirm all test pass

Assumption
-Cypress is installed and running ( npm and npx installation completed)
-File name is Homework.spec.js
-Results are visible on Cypress execution, if unattended execution throw CI/CD is required then this script will be executed on system and HTML report should be generated

NOTE:
Main page has an error Uncaught TypeError: Cannot read properties of null (reading 'offsetHeight'), this may cause the cypress to fail just on load, need to add exception on commands.js file under support folders to be able to run cypress test otherwise it will fail on load due to the error
