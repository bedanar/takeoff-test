import React, {FC} from "react";
import { IPost } from "../../../models/IPost";
import EditIcon from "../../icons/edit";
import TrashIcon from "../../icons/trash";
import styles from './PostItem.module.css'

interface PostItemProps {
    post: IPost,
    remove: (post: IPost) => void,
    update: (post: IPost) => void
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) =>  {
    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation()
        remove(post)
    }
    const handleUpdate = (e: React.MouseEvent) => {
        const title = prompt() || ""
        update({...post, title})
    }
    return (
        <div className={styles.postItem}>
            <span className={styles.postItem__id}>{post.id}.</span> 
            <span className={styles.postItem__title}>{post.title}</span>
            <div>
                <button className={styles.postItem__delete} onClick={handleRemove}>
                    <TrashIcon />
                </button>
                <button className={styles.postItem__update} onClick={handleUpdate}>
                    <EditIcon />
                </button>
            </div>
        </div>
    )
}
export default PostItem