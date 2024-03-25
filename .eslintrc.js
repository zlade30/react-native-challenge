module.exports = {
    root: true,
    extends: '@react-native',
    rules: {
        'prettier/prettier': ['error', {tabWidth: 4, endOfLine: 'auto'}],
        'react-hooks/exhaustive-deps': 'off',
    },
};
