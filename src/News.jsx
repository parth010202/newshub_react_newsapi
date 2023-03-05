import React from 'react'
import NewsItem from './NewsItem';
import fetching from './fetching';

const News = () => {
  return (
    <div className='container my-3'>
    <h1 className='heading'>Today's News</h1>
    <div className='row'>
    {}
    </div>
  </div>
  )
}

export default News