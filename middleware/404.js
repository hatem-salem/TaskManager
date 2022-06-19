const notFound = (req, res, next) => {
    res.status(404).json({ error: 'Route doesn\'t exist!' });
}
module.exports = notFound;