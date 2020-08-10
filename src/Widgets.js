import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="wigets_searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets_widgetContainer">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={"1292928776364490755"}/>
                <TwitterTweetEmbed tweetId={"1292927001825808385"}/>
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="User"
                    options={{ height:400 }}
                />
                <TwitterShareButton 
                    url={""}
                    options={{text:"#reactjs", via:"user"}}
                />
            </div>
        </div>
    );
}

export default Widgets;
