import React, { Component } from 'react';
import StoryDetail from '../containers/story_detail';
import StoriesIndex from '../containers/stories_index';

class Home extends Component {
  render() {
    var { section } = this.props.match.params;
    if (!section) { section = "home" }
    
    return (
      <div className="container text-center">
        <div className="row content">
          <StoryDetail />
          <StoriesIndex />
        </div>
      </div>
    )
  }

}

export default Home;
