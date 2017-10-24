import React, { Component } from 'react';
import { connect } from 'react-redux';

class StoryDetail extends Component {
  render() {


    const { stories, lead } = this.props

    if(!stories) {
      return <noscript />
    }

    const story = stories[lead];

    return (
      <div className="col-sm-8 story-detail">
        <a href={story.url} target="_blank">
        <div className="well detail-well">
          <h3>{story.title}</h3>
          <img src={story.hero} />
          <div className="well abstract-well">
            <h5>{story.byline}</h5>
            <h6>{story.updated_date}</h6>
            <p>{story.abstract}</p>
          </div>
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
