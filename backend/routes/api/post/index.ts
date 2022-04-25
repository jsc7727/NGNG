import express, { Router } from 'express';
import {
    sendPost,
    getCategoryPosts,
    getPost,
    getPosts,
    likeIt,
    getLikeIt,
    getPostsWithoutNoticeBoard,
    deletePost,
    getHashTagPosts
} from '../../controller/Post.controller';
import { loginRequired } from '../../middleware';
const router = Router()


// 카테고리 추가해야함

router.post('/sendPost', loginRequired, sendPost);

router.get('/getPost', getPost);
router.get('/getPosts', getPosts);

router.get('/getCategoryPosts', getCategoryPosts);
router.get('/getHashTagPosts', getHashTagPosts);

router.get('/getPostsWithoutNoticeBoard', getPostsWithoutNoticeBoard);

router.put('/likeIt', likeIt);
router.get('/getLikeIt', getLikeIt);
router.put('/updatePost', deletePost);
router.delete('/deletePost', deletePost);


export default router