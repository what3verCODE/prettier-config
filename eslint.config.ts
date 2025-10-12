import exbotanical from '@exbotanical/eslint-config';

export default exbotanical({
    // Temporary (fix eslint-config)
    yaml: false,
    ignores: ['*.json', '*.yml', '*.yaml'],
});
