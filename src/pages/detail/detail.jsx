import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/action-creator';
import {
  DetailWrapper,
  Header,
  Content
} from './style';

class Detail extends React.Component {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
  
  render() {
    return (
      <DetailWrapper>
        <Header>{ this.props.title }</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}></Content>
      </DetailWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapStateToDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreator.geDetailInfo(id));
  }
});

export default connect(mapStateToProps, mapStateToDispatch)(Detail);