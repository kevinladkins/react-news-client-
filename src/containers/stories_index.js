import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLead } from '../actions'
import _ from 'lodash';


class StoriesIndex extends Component {


  listStory(story) {
      return (
        <li
          className={story.slug == this.props.lead? "list-group-item story-item selected-story" : "list-group-item story-item"}
          key={story.title}
          onClick={() => this.props.setLead(story.slug)}
        >
          <h5>{story.title}</h5>
          <img src={story.thumbnail} />
        </li>
      )
  }

  render() {
    const { stories, lead } = this.props;

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

function mapStateToProps({ stories, lead }) {
  return { stories, lead }
}

export default connect(mapStateToProps, { setLead })(StoriesIndex);
