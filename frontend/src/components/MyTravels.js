import React, { useState, useEffect } from 'react';
import pointer from './images/map-pointer.png';
import { Navigate } from "react-router";

export default function MyTravels(props) {
    const { loginStatus } = props;
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('api/v1/Reservation/getReservations/'+props.userID)
          .then(response => response.json())
          .then(data => {
            setOffers(data);
          })
      }, []);

    return (
        <div>
            {
                loginStatus ? (
                    <div className = "body">
                        <div className = "mainbody">
                            <div className = "listoffers">
                                {offers.map((offer) => (
                                    <div className = "offerbody" key = {offer.id}>
                                        <div className = "loc">
                                            <h1 className = "locname"> {offer.hotelName} </h1>
                                            <h4 className = "infotext">
                                                {offer.totalPrice}
                                            </h4>
                                            <h4 className = "infotext">
                                                {offer.noNight}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <Navigate to = "/" />
                )
            }
        </div>
    );
}