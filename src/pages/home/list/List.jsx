import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../../store/action-creator';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';

class List extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.articleList.map((item, index) => {
            return (
              <Link key={ index } to={ `/detail/${ item.get('id') }` }>
                <ListItem>
                  <img className="pic" src={ item.get('imgUrl') } alt=""></img>
                  <ListInfo>
                    <h3 className="title">{ item.get('title') }</h3>
                    <p className="desc">{ item.get('desc') }</p>
                  </ListInfo>
                </ListItem>
              </Link>
            );
          })
        }
        { this.props.articleList.count() !== 0 && <LoadMore onClick={ () => this.props.getMoreList(this.props.page) }>加载更多</LoadMore> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
});

const mapStateToDispatch  = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreator.getMoreList(page));
  }
});

export default connect(mapStateToProps, mapStateToDispatch)(List);