import express from 'express';
import { getPosts,createPost,loginPost, createRegister, predictAge} from '../controllers/posts.js';
const router = express.Router();

router.get('/posts',getPosts);
router.post('/posts',createPost);
router.post('/login',loginPost);
router.post('/register',createRegister);
router.post('/age',predictAge)

export default router;