import AddPostModal from '@/components/AddPostModal';
import PostCard from '@/components/PostCard';
import { createAPost } from '@/lib/action';
import { getPost } from '@/lib/post';
import React from 'react';

const PostPage =async () => {
    const posts =await getPost()
    return (
        <div className='container mx-auto
        '>   <AddPostModal createAPost={createAPost}/>
            <p>Post page: {posts.length}</p>
            <div className='grid grid-cols-3 gap-5'>
                {
                    posts.map((post,ind)=> <PostCard key={ind} post={post}></PostCard>)
                }
            </div>
        
            
        </div>
    );
};

export default PostPage;