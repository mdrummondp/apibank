class UndefinedProperties extends Error {
    constructor(message) {
        super(message)

        this.name = UndefinedProperties.name
    }
}

module.exports = UndefinedProperties