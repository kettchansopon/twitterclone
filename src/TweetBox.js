import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "bunny",
            username: "bugbunny",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
        });

        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"/>
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?" 
                        type="text"
                    />
                </div>
                <input 
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox_imageInput" 
                    placeholder="Optional: Enter Image Url..." 
                    type="text"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
