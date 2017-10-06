import React, { Component } from 'react';
import { connect } from 'react-redux';

class StoryDetail extends Component {
  render() {



    const { stories, lead } = this.props

    if(!stories) {
      return <div>Loading...</div>
    }

    const story = stories[lead];
    var lastIndex = story.multimedia.length -1;
    const image = story.multimedia[lastIndex];

    return (
      <div className="col-sm-8 story-detail">
        <a href={story.url} target="_blank">
        <div className="well detail-well">
          <h3>{story.title}</h3>
          <img src={image ? image.url : "src/images/news.jpg"} />
          <br />
          <p>{story.abstract}</p>
        </div>
        </a>
      </div>
    )
  }
}

function mapStateToProps({ stories, lead }) {
  return { stories, lead }
}

export default connect(mapStateToProps)(StoryDetail);
