/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import styles from './style.css'
import { setVisibilityFilter, VisibilityFilters } from '../../actions'
import Tab from '../../components/Tab'

type Props = {
  filter: string,
  onClick: Function
}

function Tabs(props: Props) {
  const { filter, onClick } = props
  return (
    <div className={classnames(styles.tabs, 'wrapper')}>
      <Tab
        active={filter === VisibilityFilters.SHOW_ALL}
        onClick={() => onClick(VisibilityFilters.SHOW_ALL)}
      >All</Tab>
      <Tab
        active={filter === VisibilityFilters.SHOW_ACTIVE}
        onClick={() => onClick(VisibilityFilters.SHOW_ACTIVE)}
      >Active</Tab>
      <Tab
        active={filter === VisibilityFilters.SHOW_COMPLETED}
        onClick={() => onClick(VisibilityFilters.SHOW_COMPLETED)}
      >Completed</Tab>
    </div>
  )
}


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