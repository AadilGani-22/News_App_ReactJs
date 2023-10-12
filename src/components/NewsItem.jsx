import React  from 'react'

const NewsItem =(props)=> {
  
      let {title,description , imageUrl , newsUrl , author , date , source} = props;
    return (
      <div className='my-3'>
          <div className="card">
          <div style={{display:'flex' , justifyContent :'flex-end' , position:'absolute' , right:'0' }}>

            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
            <img src={!imageUrl?"https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3MlMjBoZWFkbGluZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60":imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                 <p className="card-text">{description}...</p>
                 <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()} </small></p>
                <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
  }


export default NewsItem