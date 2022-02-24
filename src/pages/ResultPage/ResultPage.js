import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";

export default function ResultPage(){
    const [restaurantDetails, setRestaurantDetails] = useState([]);
    const [load, setLoad] = useState(true);
    const navigate = useNavigate();
    const {id} = useParams();

    const getRestaurantDetails = (id) => {
        setLoad(true);
        axios
        .get(`${BASE_URL}/restaurants/${id}`
        )
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getRestaurantDetails();
    }, []);

    return(
        <div>
            <h1>ResultPage</h1>
        </div>
    )

}