const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
    serverUrl: 'http://sonarqube:9000',
    options : {
    'sonar.sources': '.',
    'sonar.tests': '.',
    'sonar.inclusions' : '**', // Entry point of your code
    'sonar.test.inclusions': 'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
    'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
    'sonar.testExecutionReportPaths': 'coverage/test-reporter.xml',
    'sonar.login': 'admin',
    'sonar.password': 'admin'
}}, () => {console.log('Escaneamento finalizado');});