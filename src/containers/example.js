const React = require('react');
const { connect } = require('react-redux');

const Element = (props) => {
  return (
    <h1>element</h1>
  )
}


function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Element);
