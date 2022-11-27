const env = process.env.NODE_ENV


export default {
    baseURl: env === 'development' ? '//127.0.0.1:8080' : '//127.0.0.1:8080'
}