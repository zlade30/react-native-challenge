module.exports = {
    root: true,
    extends: '@react-native',
    rules: {
        // other rules...
        // You may need to override any conflicting rules
        'prettier/prettier': ['error', {tabWidth: 4}],
        'react-hooks/exhaustive-deps': 'off',
    },
};
