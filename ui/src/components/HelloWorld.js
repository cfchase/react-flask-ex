import * as React from 'react';
import { connect } from 'react-redux';
import { getStatus } from '../actions/status';


class HelloWorld extends React.Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    let post = <p></p>;
    if (this.props.statusLoading) {
      post = <p>Loading...</p>;
    } else if (this.props.error) {
      post = <p>Error: {JSON.stringify(this.props.error)}</p>
    } else if (this.props.status) {
      post = (
        <div>
          <p>Version: {this.props.status.version}</p>
          <p>Status: {this.props.status.status}</p>
          <p>Time: {this.props.status.time}</p>
        </div>
      )
    }

    return (
      <div>
        <button
          id="updateStatusButton"
          type="button"
          onClick={e => {
            this.props.click(e);
          }}
        >
          Update Status
        </button>
        {post}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.helloWorldReducer;
}

function mapDispatchToProps(dispatch) {
  return {
    init: () => {
      dispatch(getStatus());
    },
    click: (e) => {
      e.preventDefault();
      dispatch(getStatus());
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
