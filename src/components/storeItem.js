import React from "react";

function StoreItem({title, category, description, image, id, price, name, number}) {
    return (
        <div className="card">
            <div className="view view-cascade overlay">
                <img src={image}
                     className="card-img-top"
                     alt="sample photo"/>
            </div>
            <div className="card-body">
                <a href="" className="text-muted">
                    <h5>{category}</h5>
                </a>
                <h4 className="card-title my-2">
                    <strong>
                        <a href="">{title}</a>
                    </strong>
                </h4>
                <p className="card-text">{description}
                </p>
            </div>
            <div className="card-footer">
                <span className="float-left">{price} PKR</span>
                <span className="float-right">
                    <a className="material-tooltip-main" data-toggle="tooltip" data-placement="top" title=""
                       data-original-title="Quick Look">
                      <i className="fas fa-eye ml-3"/>
                    </a>
                  </span>
            </div>
        </div>
    )
}

export default StoreItem;