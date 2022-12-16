import "./Post.css";

export const Post = (props) => {
    const postData = props.postData;

    return (
        <div class="post">
            <div class="post-header">
                <img class="post-avatar" src={postData?.user?.avatar} />
                <h4>{postData?.user?.name}</h4>
            </div>
            <div class="post-asset">
                <img src={postData?.asset} />
            </div>
            <div class="post-lcs">
                <div class="lcs-left">
                    <a> Like </a>
                    <a> Comment </a>
                    <a> Share </a>
                </div>
                <div class="lcs-right">
                    <a> Pin </a>
                </div>
            </div>
            <div class="post-liked-by">
                <p>Liked By xyz and Others</p>
            </div>
            <div class="post-description">
                <p><bold>{postData?.user?.name}</bold></p>
                <p>{postData?.description}</p>
            </div>
            <div class="post-comment-section">
                <p>View All {postData?.comments} Comments</p>
                <p>{postData?.time}</p>
                <form id="new-comment">
                    <input type="text" name="comment" placeHolder="Add a comment..."></input>
                    <button>Post</button>
                </form>
            </div>
        </div>
    )
};
