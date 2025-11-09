const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const {protect} = require('../middleware/authMiddleware');

const{
    createPost,
    getAllPosts,
    getPostBySlug,
    updatePost,
    deletePost,
} = require('../controllers/postController');
const { route } = require('./postRoute');

router.get('/', postController.getAllPosts);
router.get('/:slug',postController.getPostBySlug);

router.post('/',protect, postController.createPost);
router.put('/:id',protect, postController.updatePost);
router.delete('/:id',protect, postController.deletePost);

module.exports = router;