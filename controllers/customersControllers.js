exports.getMethod = async (req, res) => {
    const header = req.method;
    res.send(req.method)
}
