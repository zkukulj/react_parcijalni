import React from 'react'
import PropTypes from 'prop-types'

const GithubUser = ({avatar_url,bio,location}) => {
  return (
    <>
            <div><img src={avatar_url} alt="Repo logo"/></div>
            <div><span>BIO: </span>{bio}</div>
            <div><span>LOCATION: </span>{location}</div>
            <div><span>REPOSITORIES:</span></div>
    </>
  )
}

GithubUser.propTypes = {
    avatar_url:PropTypes.string,
    bio:PropTypes.string,
    location:PropTypes.string,
}

export default GithubUser