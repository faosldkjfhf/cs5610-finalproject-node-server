import * as listsDao from "./lists-dao.js";

const findLists = async (req, res) => {
    const lists = await listsDao.findLists();
    res.json(lists);
}

const findListsByUser = async (req, res) => {
    const lists = await listsDao.findListsByUser(req.params.uid);
    res.json(lists);
}

const createList = async (req, res) => {
    const newList = await listsDao.createList(req.body);
    res.json(newList);
}

const updateList = async (req, res) => {
    const status = await listsDao.updateList(req.body);
    res.json(status);
}

const deleteList = async (req, res) => {
    const status = await listsDao.deleteList(req.params.lid);
    res.json(status);
}

const ListsController = (app) => {
    app.get('/api/lists', findLists);
    app.get('/api/lists/:uid', findListsByUser);
    app.post('/api/lists', createList);
    app.put('/api/lists', updateList);
    app.delete('/api/lists/:lid', deleteList);
}

export default ListsController;