import React from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem 
} from '../style';

class Topic extends React.Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.topicList.map(item => {
            return (
              <TopicItem key={ item.get('id') }>
                <img
                  className="topic-img"
                />
                { item.get('title') }
              </TopicItem>
            );
          })
        }
      </TopicWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
});

export default connect(mapStateToProps)(Topic);