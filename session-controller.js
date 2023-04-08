function SessionController(app) {
    const setSessionAttribute = (req, res) => {
        const name = req.params.name;
        const value = req.params.value;
        req.session[name] = value;
        res.sendStatus(200);
    };
    const getSessionAttribute = (req, res) => {
        const name = req.params.name;
        const value = req.session[name];
        res.send(value);
    };
    const clearSession = (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };
    app.get("/api/session/set/:name/:value", setSessionAttribute);
    app.get("/api/session/get/:name", getSessionAttribute);
    app.get("/api/session/clear", clearSession);
}

export default SessionController;