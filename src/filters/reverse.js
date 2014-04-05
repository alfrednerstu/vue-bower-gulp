Vue.filter('reverse', function (value) {
    return value.split('').reverse().join('')
})