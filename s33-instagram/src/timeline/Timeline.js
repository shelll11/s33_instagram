import React, { useState } from 'react';
import './Timeline.css';
import Suggestions from './Suggestions';
import Post from './posts/Post';

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "shelbyarmor",
      postImage: "https://images-prod.anothermag.com/2320/azure/another-prod/360/0/360377.jpg",
      likes: 272,
      timestamp: "1hr"
    },
    {
      user: "sydneyarmor",
      postImage: "https://images.ctfassets.net/r7p9m4b1iqbp/1HIXQ8KtpBvkuwp7G3piLG/f5791917fdfe45b9ccc98926e0b9c6f6/Stephen-Dagley-Austria-Hut-Hiking-Fieldmag-10.jpg?w=1000",
      likes: 86,
      timestamp: "7hr"
    },
    {
      user: "johnarmor",
      postImage: "https://designwanted.com/wp-content/uploads/2022/02/Natuzzi-14-scaled.jpg",
      likes: 982,
      timestamp: "12hr"
    },
    {
      user: "mariokoppe",
      postImage: "https://images.pexels.com/photos/2270328/pexels-photo-2270328.jpeg?cs=srgb&dl=pexels-dorothycastillo-2270328.jpg&fm=jpg0",
      likes: 104,
      timestamp: "2d"
    },
  ]);
  return (
    <div className='timeline'>
        <div className="timeline__left">
          <div className="timeline__posts">
            {posts.map(post => (
              <Post 
              user={post.user} 
              postImage={post.postImage} 
              likes={post.likes} 
              timestamp={post.timestamp} 
              />
            ))}
          </div>
        </div>
        <div className="timeline__right">
            <Suggestions />
        </div>
    </div>
  )
}

export default Timeline