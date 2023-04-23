import * as usersDao from "./users-dao.js";

const UsersController = (app) => {
    const findAllUsers = async (req, res) => {
        const users = await usersDao.findAllUsers();
        res.json(users);
    };

    const findUserById = async (req, res) => {
        const user = await usersDao.findUserById(req.params.userId);
        if (user) {
            res.json(user);
            return;
        }
        res.sendStatus(404);
    };

    const createUser = async (req, res) => {
        const user = req.body;
        user.role = "user";
        const newUser = await usersDao.createUser(user)
        res.json(newUser);
    };

    const updateUser = async (req, res) => {
        const userId = req.params.userId;
        const status = await usersDao.updateUser(userId, req.body);
        if (req.session["currentUser"]) {
            if (req.session["currentUser"]._id === userId) {
                req.session["currentUser"] = req.body;
            }
        }
        res.send(status);
    };

    const deleteUser = async (req, res) => {
        const userId = req.params.userId;
        const index = await usersDao.deleteUser(userId);
        if (index === -1) {
            res.sendStatus(404);
            return;
        }
        res.sendStatus(200);
    };

    app.post("/api/users/register", async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await usersDao.findUserByCredentials(username, password);
        if (user) {
            console.log("old user");
            res.sendStatus(409);
            return;
        }
        try {
            const newUser = await usersDao.createUser(req.body);
            console.log("new user");
            req.session["currentUser"] = newUser;
            res.json(newUser);
        }
        catch (error) {
            res.sendStatus(404);
        }

    });

    app.post("/api/users/login", async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        console.log(username, password);
        const user = await usersDao.findUserByCredentials(username, password);
        console.log(user);
        if (user) {
            req.session["currentUser"] = user;
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    });

    app.post("/api/users/profile", async (req, res) => {
        if (!req.session["currentUser"]) {
            res.sendStatus(404);
            return;
        }
        res.json(req.session["currentUser"]);
    });

    app.post("/api/users/logout", async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    });

    app.get("/api/users", findAllUsers);
    app.get("/api/users/:userId", findUserById);
    app.post("/api/users", createUser);
    app.put("/api/users/:userId", updateUser);
    app.delete("/api/users/:userId", deleteUser);
};

export default UsersController;