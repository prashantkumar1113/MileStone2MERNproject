import React, {useEffect, useState} from "react";

export default function DisplayDb({displayField}) {
    const [dbData, setDbData] = useState([]);

    useEffect(() => {
        const OUR_DB_URL = "http://localhost:3001/";
        const fetchData = async () => {
            const response = await fetch(OUR_DB_URL + displayField);
            const resData = await response.json();
            console.log("RES Data", resData);
            if (resData) {
                setDbData(resData);
                console.log("Data", dbData);
            } else {
                setDbData("Not found");
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>{displayField}</h2>
            {dbData.map((data, id) => (
                <>
                    <div key={id}>
                        <p>{data.email}</p>
                        <p>{data.firstname}</p>
                        <p>{data.lastname}</p>
                        <p>{data.birthdate}</p>
                    </div>
                    <hr />
                </>
            ))}
        </div>
    );
}
