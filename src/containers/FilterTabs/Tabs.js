/* @flow */
import React from 'react'
import classnames from 'classnames'
import styles from './style.css'
import { VisibilityFilters } from '../../actions'
import Tab from '../../components/Tab'

type Props = {
  filter: string,
  onClick: Function
}

function Tabs(props: Props) {
  const { filter, onClick } = props
  const handleClick = (filter) => () => onClick(filter)
  return (
    <div className={classnames(styles.tabs, 'wrapper')}>
      <Tab
        active={filter === VisibilityFilters.SHOW_ALL}
        onClick={handleClick(VisibilityFilters.SHOW_ALL)}
      >All</Tab>
      <Tab
        active={filter === VisibilityFilters.SHOW_ACTIVE}
        onClick={handleClick(VisibilityFilters.SHOW_ACTIVE)}
      >Active</Tab>
      <Tab
        active={filter === VisibilityFilters.SHOW_COMPLETED}
        onClick={handleClick(VisibilityFilters.SHOW_COMPLETED)}
      >Completed</Tab>
    </div>
  )
}

export default Tabs


