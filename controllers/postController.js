import Post from '../models/Post.js';

export const getPosts = async (req, res) => {
  const posts = await Post.find({}).populate('user', 'name email');
  res.json(posts);
};

export const createPost = async (req, res) => {
  const { title, content } = req.body;

  const post = new Post({
    title,
    content,
    user: req.user._id,
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
};

export const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('user', 'name email');

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};

export const updatePost = async (req, res) => {
  const { title, content } = req.body;

  const post = await Post.findById(req.params.id);

  if (post) {
    post.title = title;
    post.content = content;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};

export const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    await post.remove();
    res.json({ message: 'Post removed' });
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};
