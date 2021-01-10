import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./CardOne.css";

class CardOne extends React.Component {
  render() {
    const {
      img,
      title,
      price,
      description,
      area,
      beds,
      baths,
      garages,
      propertyId,
      btnText,
    } = this.props;

    return (
      // <Link
      //   to={`/property-detail/${propertyId}`}
      //   className="btn btn-primary mt-3"
      // >
      // <Redirect to={`/property-detail/${propertyId}`}>
      <div
        className="product"
        onClick={<Redirect to={`/property-detail/${propertyId}`} />}
      >
        <div className="product__imgContainer">
          <img
            className={`product__img ${"product__imgLarge"}`}
            src={`http://localhost:3001/uploads/${img}`}
            alt=""
          />

          <div className="product__info">
            <p className="product__title">{title}</p>
            <p className="product__price">
              <small>&#8377;</small>
              <strong>{price} Lakhs</strong>
            </p>{" "}
            <p className="product__description">{description}</p>
          </div>
          {/* <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div> */}
          <Link
            to={`/property-detail/${propertyId}`}
            // className="btn btn-primary mt-3"
          >
            {btnText}
          </Link>
        </div>

        {/* <button onClick={addToBasket}>Add to Basket</button> */}
      </div>
      // </Redirect>
      // </Link>

      // <div
      //   className="card shadow-lg"
      //   style={{
      //     width: "360px",
      //   }}
      // >
      //   <img
      //     className="card-img-top"
      //     style={{ width: "100%", height: "250px" }}
      //     src={`http://localhost:3001/uploads/${img}`}
      //   />
      //   <div className="card-body">
      //     <h5 className="card-title">
      //       {title}
      //       <span className="float-right badge badge-success">
      //         Price: ${price}
      //       </span>
      //     </h5>

      //     <div className="card-text">
      //       <ul className="list-group">
      //         <li className="list-group-item">
      //           Area:
      //           <span className="badge badge-secondary float-right">
      //             {area} m<sup>2</sup>
      //           </span>
      //         </li>
      //         <li className="list-group-item">
      //           Beds:
      //           <span className="badge badge-secondary float-right">
      //             {beds}
      //           </span>
      //         </li>
      //         <li className="list-group-item">
      //           Baths:
      //           <span className="badge badge-secondary float-right">
      //             {baths}
      //           </span>
      //         </li>
      //         <li className="list-group-item">
      //           Garages:
      //           <span className="badge badge-secondary float-right">
      //             {garages}
      //           </span>
      //         </li>
      //       </ul>
      //     </div>
      //     <Link
      //       to={`/property-detail/${propertyId}`}
      //       className="btn btn-primary mt-3"
      //     >
      //       {btnText}
      //     </Link>
      //   </div>
      // </div>
    );
  }
}

export default CardOne;
