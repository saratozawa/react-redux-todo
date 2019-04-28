/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions'
import Tabs from './Tabs'

const mapStateToProps = (state) => {
  return {
    filter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

const FilterTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs)

export default FilterTabs