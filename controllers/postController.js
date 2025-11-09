const Post = require('/PROJECTS/personal-blog-backend/models/postModel');

const createPost = async (req, resp) => {
    try {
        const { title, markdownContent, author } = req.body;

        if (!title || !markdownContent) {
            return resp.status(400).json({ message: 'Please provide title and markdowncontent' });
        }

        const newPost = await Post.create({
            title,
            markdownContent,
            author,
        });
        resp.status(201).json(newPost);
    } catch (error) {
        resp.status(404).json({ message: 'Error creating Post', error: error.message });
    }
}

const getAllPosts = async (req, resp) => {
    try {
        const Posts = await Post.find({}).sort({ createAt: -1 });
        resp.status(200).json(Posts);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ message: 'Error creating Post', error: error.message });
    }

};

const getPostBySlug = async(req,res)=>{
    try{
        const post = await Post.findone({slug: req.params.slug});

        if(!post){
            return res.status(404).json({message: 'Post not found'});
        }
        res.status(200).json(post);
    }catch(error){
        res.status(500).json({message: "Error fetching post", error: error.message});
    }
}

const updatePost = async (req, resp) => {
    try {
        const updatePost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        if (updatePost) {
            resp.status(200).json(updatePost);
        } else {
            resp.status(404).json({ message: 'Page not found' });
        }
    } catch (error) {
        console.error(error);

        if (error.name === 'CastError') {
            return resp.status(400).json({ message: `Invalid post ID format: ${req.params.id}` });
        }
        if (error.name === 'ValidationError') {
            return resp.status(400).json({ message: 'Validation Error', error: error.message });
        }

        resp.status(500).json({ message: 'Error updating post', error: error.message });
    }
}

const deletePost = async (req, resp) => {
    try {
        const deletePost = await Post.findByIdAndDelete(req.params.id);

        if (deletePost) {
            resp.status(200).json({ message: 'Post deleted successfully' });
        } else {
            resp.status(400).json({ message: 'Page not found' });
        }
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({ message: `Invalid post ID format: ${req.params.id}` });
        }

        resp.status(500).json({ message: 'Error deleting post', error: error.message });
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getPostBySlug,
    updatePost,
    deletePost,
};