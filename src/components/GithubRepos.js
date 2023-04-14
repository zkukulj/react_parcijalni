import React from 'react'
import PropTypes from 'prop-types'

const GithubRepos = ({name}) => {
  return (
    <>
        <li>
        {name}
        </li>
    </>
  )
}

GithubRepos.propTypes = {
    name: PropTypes.string
}

export default GithubRepos