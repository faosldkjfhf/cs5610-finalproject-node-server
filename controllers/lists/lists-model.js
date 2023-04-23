import mongoose from 'mongoose';
import listsSchema from './lists-schema.js'
const listsModel = mongoose.model('ListsModel', listsSchema);
export default listsModel;