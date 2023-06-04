# Rolando Sanchez 
This is a public repo with small test examples<br><br>

The test here is cypress code and run as follow:<br>
1-Navigate to the test page (this case https://global.hitachi-solutions.com/)<br>
2-Confirm the page load with an assertion<br>
3-Expand search area and enter search string and execute run<br>
4-Confirm URL is using search criteria<br>
5-Validate<br>
  -Results contain search criteria<br>
  -Results displayed<br>
6-Navigate to the first item from the list<br>
  -Check for url containing search criteria<br>
  -Check for title containing search criteria<br>

How to run<br>
1-Open cypress on visual studio code and run npx cypress open<br>
2-Search for the test on the tree and click on it, this will run automatically opening a new browser<br>

Results<br>
Check on Cypress Browser window to confirm all test pass<br>

Assumption<br>
-Cypress is installed and running ( npm and npx installation completed)<br>
-File name is Homework.spec.js<br>
-Results are visible on Cypress execution, if unattended execution throw CI/CD is required then this script will be executed on system and HTML report should be generated<br>

NOTE:<br>
Main page has an error Uncaught TypeError: Cannot read properties of null (reading 'offsetHeight'), this may cause the cypress to fail just on load, need to add exception on commands.js file under support folders to be able to run cypress test otherwise it will fail on load due to the error
