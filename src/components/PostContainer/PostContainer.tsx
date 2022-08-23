import React from "react";
import { useAppDispatch } from "../../hooks/redux";
import { IPost } from "../../models/IPost";
import { postAPI } from "../../services/PostsService";
import PostItem from "./PostItem/PostItem";
import { logout } from '../../store/reducers/AuthSlice'
import styles from './PostContainer.module.css'
import { Button, EColors } from "../Button/Button";

const PostContainer = () => {
    const {data: posts} = postAPI.useFetchAllPostsQuery(100)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    const dispatch = useAppDispatch()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }
    const handleRemove = (post: IPost) => {
        deletePost(post)
    }
    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }
    return (
        <div className={styles.posts}>
            <div className={styles.posts__controls}>
                <Button color={EColors.white} backgroundColor={EColors.orange} onClick={handleCreate}>add post</Button>
                <Button onClick={() => dispatch(logout())}>log out</Button>
            </div>
            <div className={styles.posts__list}>
                {posts && posts.map(post => {
                    return <PostItem remove={handleRemove} update={handleUpdate} post={post} key={post.id} />
                })}
            </div>
        </div>
    )
}
export default PostContainer