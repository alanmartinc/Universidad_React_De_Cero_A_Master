import React from 'react'
import { connect } from 'react-redux'
import { updateName } from '../redux/actions/userActions'

const Info = (props) => {

  const handlerChange = (e) => {
    const name = e.target.value

    props.updateName(name)
  }

  return (
    <div>
      <h1>{ props.user.name } - { props.user.country }</h1>
      <input type="text" onChange={handlerChange}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (name) => dispatch(updateName(name))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info)