import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


class StoriesIndex extends Component {

  listStory(story) {
    return (
      <li className="list-group-item story-item" key={story.title}>
        <h5>{story.title}</h5>
        <img src={story.multimedia[1] ? story.multimedia[1].url : 'src/images/news.jpg'} />
      </li>
    )
  }

  render() {
    const { stories } = this.props;

    if (!stories) {
      return <div>Loading...</div>
    }



    return (
      <div className="col-sm-4">
       <ul className="list-group story-list">
          {_.map(stories, story => this.listStory(story))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ stories }) {
  return { stories }
}

export default connect(mapStateToProps)(StoriesIndex);
