import React from 'react'

const Card = (props) => {
return (
    <div className="col-12 col-md-3 card g-3" >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmStm5d-komRukWTSOYWnVAhDo5i2PbrBhIA&s" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn btn-primary">{props.label}</a>
        </div>
    </div>
)
}

export default Card