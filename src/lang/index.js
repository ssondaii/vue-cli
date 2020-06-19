const requireLang = require.context(
    '../lang',
    true,
    /\.json$/
); // load all file in folder ../lang with tail is .json

const messages = {};

for (const file of requireLang.keys()) { // get each file
    if (file === './index.js') continue; // ignore file index.js

    const path = file.replace(/(\.\/|\.json$)/g, '').split('/'); // convert file path to array

    // convert all .json content into object then assign to messages
    path.reduce((o, s, i) => {

        if (o[s]) return o[s];

        o[s] = i + 1 === path.length ? requireLang(file) : {};

        return o[s];
    }, messages)
}

export default messages; // using exported message to import into other place