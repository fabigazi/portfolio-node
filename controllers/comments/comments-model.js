import mongoose from 'mongoose';
import commentsSchema from './comments-schema.js'
const commentsModel = mongoose.model('commentModel', commentsSchema);
export default commentsModel;