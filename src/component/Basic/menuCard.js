import React from 'react'

const MenuCard = ({ manuData }) => {
     return (
        <>
            {manuData.map((curElement) => {
                const { id ,images,category,name,price,description}=curElement;
                
                return (
                    <>
                        <section>
                            <div className='container p-1' key={id}>
                                <div className="card mb-2">
                                    <div className="row g-0">
                                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                            <img src={images} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                                            <div className="card-body">
                                                <span className='rounded-circle'>{id}</span>
                                                <h4 className="card-title">{category}</h4>
                                                <h5 className="card-title text-center bg-warning p-1">{name}</h5>
                                                <span className="card-text"><strong>Price: ₹{price}</strong></span>
                                                <p className="card-text">{description}</p>
                                                <button type="button" class="btn btn-outline-warning">Order</button>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            })}

        </>
    )
}

export default MenuCard;
