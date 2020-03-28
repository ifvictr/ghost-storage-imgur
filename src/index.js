import Promise from 'bluebird'
import BaseStorage from 'ghost-storage-base'
import imgur from 'imgur'

class ImgurStorage extends BaseStorage {
    constructor(config) {
        super()

        // Required config
        const username = process.env.GHOST_IMGUR_USERNAME || config.username
        const password = process.env.GHOST_IMGUR_PASSWORD || config.password
        const clientId = process.env.GHOST_IMGUR_CLIENT_ID || config.clientId

        imgur.setCredentials(username, password, clientId)
    }

    delete(filename, targetDir) {
        const id = filename.substring(0, filename.indexOf('.'))
        return imgur.getInfo(id)
            .then(res => res.data.deletehash)
            .then(imgur.deleteImage)
    }

    exists(filename, targetDir) {
        return Promise.resolve(true) // Imgur will always generate a unique ID
    }

    read(options) {
        return Promise.reject('Not implemented')
    }

    save(file, targetDir) {
        return imgur.uploadFile(file.path)
            .then(res => res.data.link)
    }

    serve() {
        // No need to serve because absolute URLs are returned
        return (req, res, next) => {
            next()
        }
    }
}

export default ImgurStorage
