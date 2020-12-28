import React, {useState, useEffect  } from "react";
import axios from "axios";

export default function Demo1(){
    const [dto, setdto] = useState({});

    const url = "http://localhost:50871/api/v1/service1/";

    const getDemoDTO = () => {
        axios.get(url)
        .then((response) => {
            console.log(response);
            setdto(response.data);
        })
        .catch(error => console.log(error));
    }

    const updateDemoDTO = () => {
        axios.post(`${url}Increment`,dto)
        .then((response) => {
            console.log(response);
            setdto(response.data);
        })
        .catch(error => console.log(error));
    }

    return(
        <div>
            <button type="button" onClick={() => { getDemoDTO() }}>Get DTO</button>&nbsp;
            <label>{dto.totalSum}</label>
            <button type="button"  onClick={() => { updateDemoDTO() }}>Update DTO</button>
        </div>
    );

}