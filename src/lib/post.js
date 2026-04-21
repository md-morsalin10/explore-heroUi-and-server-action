import post from "../data/post.json"

export const getPost=async()=>{
    return post;
}

export const updatePost=async(newPost)=>{
    newPost.id = post.length+1;
    post.push(newPost);
    return {ok:true, message:"Task updated successfully"}
}