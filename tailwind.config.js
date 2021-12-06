const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['style/globalStyle.css', 'components/**/*.tsx', 'pages/**/*.tsx'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                grey: colors.trueGray,
                gray: colors.trueGray,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
