import React, { Fragment, FunctionComponent } from 'react'

const NotFoundPage: FunctionComponent = () => {
  return (
    <Fragment>
      <h1>404</h1>
      <p>
        Page not found. Kiss me{' '}
        <span role="img" aria-label="Kiss Mark">
          💋
        </span>
      </p>
    </Fragment>
  )
}

export default NotFoundPage
