import React, { Component } from 'react';
import StoryDetail from '../containers/story_detail';
import StoriesIndex from '../containers/stories_index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchStories, fetchUpdate } from '../actions';

class Home extends Component {

  updateStories() {
    var { section } = this.props.match.params;
    if (!section) { section = "home" };
    this.props.fetchUpdate(section)
  }

  componentWillMount() {
    var { section } = this.props.match.params;
    if (!section) { section = "home" };
    this.props.fetchStories(section);
  }

  componentDidMount() {
    this.interval = setInterval(this.updateStories.bind(this), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
  return bindActionCreators({ fetchStories, fetchUpdate }, dispatch)
}

export default connect(null, mapDispatchToProps)(Home);
