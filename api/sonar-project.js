const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
    serverUrl: 'http://sonarqube:9000',
    options : {
    'sonar.sources': '.',
    'sonar.inclusions' : '/**', // Entry point of your code
    'sonar.login': 'admin',
    'sonar.password': 'admin'
}}, () => {console.log('Escaneamento finalizado');});