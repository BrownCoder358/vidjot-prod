if(process.env.NODE_ENV === 'production'){
    module.exports = {
        mongoURI: 'mongodb://ryan:Hc791451@ds117681.mlab.com:17681/vid-prod'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    }
}