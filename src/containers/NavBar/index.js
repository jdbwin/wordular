import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  toggleModal
} from 'modules/visibility'

import NavBarView from 'components/NavBar'

class NavBar extends Component {

  popModal = modalType => this.props.toggleModal(modalType)

  render() {
    return (
      <NavBarView
        popModal={modalType => this.popModal(modalType)}
        token={this.props.token}
      />
      )
  }
}

const mapStateToProps = ({ auth }) => ({
  token: auth.token
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleModal
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
