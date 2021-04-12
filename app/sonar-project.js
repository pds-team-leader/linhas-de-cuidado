const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
    serverUrl: 'http://sonarqube:9000',
    options : {
    'sonar.sources': '.',
    'sonar.tests': '.',
    'sonar.inclusions' : '**', // Entry point of your code
    'sonar.test.inclusions': 'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
}}, () => {console.log('Escaneamento finalizado');});
