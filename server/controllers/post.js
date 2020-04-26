const Post = require('../models/Post')

exports.create = async function (req, res, next) {
    const { title, text, category, link } = req.body
    const userId = req.user.id
    try {
        const post = new Post({
            title,
            text,
            category,
            link,
            author: userId
        })
        await post.save()
        return res.status(201).json(post)
    } catch (err) {
        return next(err)
    }
}

exports.getAll = async function (req, res, next) {
    try {
        Post.find((err, posts) => {
            if (err)
                res.send(err);
            res.json(posts);
        });    
    } catch (err) {
        return next(err)
    }
}