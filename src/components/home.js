import React, { Component } from 'react';
import StoryDetail from '../containers/story_detail';
import StoriesIndex from '../containers/stories_index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchStories } from '../actions';

class Home extends Component {

  componentDidMount() {
    var { section } = this.props.match.params;
    if (!section) { section = "home" };
    this.props.fetchStories(section);
  }



  render() {
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStories }, dispatch)
}

export default connect(null, mapDispatchToProps)(Home);
