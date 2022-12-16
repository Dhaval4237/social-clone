// import {} from 'react';
import { Post } from '../Post/Post';
import './Feed.css';

export const Feed = (props) => {
    const posts = [
        {
            id: 1,
            user: {
                name: "Hugh Jackman",
                avatar: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            },
            description: "Post desc",
            likes: 1500,
            comments: 15,
            is_Liked: false,
            asset: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            time: "4 hours ago"
        },
        {
            id: 2,
            user: {
                name: "Cristiano Ronaldo",
                avatar: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            },
            description: "Post desc 2",
            likes: 1510,
            comments: 15,
            is_Liked: false,
            asset: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            time: "6 Hours ago"
        },
        {
            id: 3,
            user: {
                name: "Ryan Reynolds",
                avatar: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            },
            description: "Post desc 3",
            likes: 1500,
            comments: 15,
            is_Liked: false,
            asset: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            time: "7 Hours ago"
        }
    ]
    return (
        <div class="feed">
            {
                posts.map((post) => (
                    <Post postData={post} index={post.id} />
                ))
            }
        </div>
    )
};

