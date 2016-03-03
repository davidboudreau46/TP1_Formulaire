exports.config = {
    framework: 'jasmine',
	capabilities: {'browserName': 'chrome'},
	baseUrl: 'http://localhost:9000',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/**/*.js']
}