import mongoose from 'mongoose';
const schema = mongoose.Schema({
  comment: String,
  date: String,
  author: String,
}, {collection: 'comments'});
export default schema;