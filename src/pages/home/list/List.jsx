import React from 'react';
import { connect } from 'react-redux';
import {
  ListItem,
  ListInfo
} from '../style';

class List extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.articleList.map(item => {
            return (
              <ListItem key={ item.get('id') }>
                <img className="pic" alt=""></img>
                <ListInfo>
                  <h3 className="title">{ item.get('title') }</h3>
                  <p className="desc">{ item.get('desc') }</p>
                </ListInfo>
              </ListItem>
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
});

export default connect(mapStateToProps)(List);