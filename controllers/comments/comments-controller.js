
import * as commentsDao from './comments-dao.js'

const createComment = async (req, res) => {
    const newComment = req.body;
    newComment.likes = 0;
    newComment.liked = false;
    const insertedComment = await commentsDao.createComment(newComment);
    res.json(insertedComment);
}


const findComments = async (req, res) => {
    const comments = await commentsDao.findComments()
    res.json(comments);
 }

export default (app) => {
    app.post('/api/comment', createComment);
    app.get('/api/comments', findComments);
}
