const env = process.env.NODE_ENV


export default {
    baseURl: env === 'development' ? '/api' : '/api'
}