
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            present: 'default', // выбрали настройки по умолчанию
        })
    ]
}