import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function DisplayDb() {
    const [dbData, setDbData] = useState([]);
    const {displayField} = useParams();
    console.log("params", displayField);

    useEffect(() => {
        const OUR_DB_URL = "http://localhost:3001/";
        const fetchData = async () => {
            const response = await fetch(OUR_DB_URL + displayField);
            const resData = await response.json();
            console.log("RES Data", resData);
            if (resData) {
                setDbData(resData);
                if (resData.length > 0) {
                    console.log("Keys", Object.keys(resData[0]));
                }
            } else {
                setDbData("Not found");
            }
        };
        fetchData();
    }, [displayField]);

    return (
        <div>
            <h2>{displayField}</h2>
            {dbData.map((data, id) => (
                <>
                    <div key={id}>
                        {Object.keys(data).map((objectKey) => (
                            <p>
                                {objectKey}: {data[objectKey]}
                            </p>
                        ))}
                    </div>
                    <hr />
                </>
            ))}
        </div>
    );
}
