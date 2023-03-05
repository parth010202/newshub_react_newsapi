import React from 'react'

const NewsItem = (props) => {
  return (
    <div className='container my-3' style={{width:"600px",boxShadow:"2px 2px 10px silver",borderRadius:"30px",background:"#e0ccff",paddingBottom:"5px"}}>
    <h4 style={{paddingTop:"25px"}}>{props.title}</h4>
    <img className='img-fluid'src={props.urlToImage} alt="/" style={{width:"auto",padding:"25px"}}/> 
    <p>{props.description}</p>
    <p >{props.content}</p>
    <a className='btn btn-primary mb-3' style={{}}href={props.url}>View More</a>
    </div>
    
//     <div className='col-md-4'>
//     <div className="card" style={{width:"18rem",height:"auto"}}>
//     <img className='car-img-top'src={props.urlToImage} alt="/"/> 
//     <div className='card-body'>
//     <h5 className='card-title'>{props.title}</h5>
//     <p className='card-text'>{props.description}</p>
//     {/* <p className='card-text'>{props.content}</p> */}
//     <a className='btn btn-primary'href={props.url}>View More</a>
//     </div>
//   </div>
//     </div>
//style={{background:"aqua"}}
  )
}

export default NewsItem