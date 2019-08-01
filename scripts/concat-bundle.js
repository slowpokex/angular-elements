const fs = require('fs-extra');
const concat = require('concat');

(async () => {
    const files = [
        './dist/runtime.js',
        './dist/polyfills-es5.js',
        './dist/polyfills.js',
        './dist/scripts.js',
        './dist/main.js'
    ];

    await fs.ensureDir('components');
    await concat(files, 'components/app-components.js');
})();
