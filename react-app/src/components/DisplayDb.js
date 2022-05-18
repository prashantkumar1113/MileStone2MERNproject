import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Row, Card, Table} from "react-bootstrap";

export default function DisplayDb() {
    const [dbData, setDbData] = useState([]);
    const {displayField} = useParams();
    console.log("params", displayField);
    const [dbKeys, setDbKeys] = useState([]);

    useEffect(() => {
        document.title = `Dbdata - ${displayField}`;
        const OUR_DB_URL = "http://localhost:3001/";
        const fetchData = async () => {
            const response = await fetch(OUR_DB_URL + displayField);
            const resData = await response.json();
            console.log("RES Data", resData);
            if (resData) {
                setDbData(resData);
                if (resData.length > 0) {
                    setDbKeys(Object.keys(resData[0]));
                    // console.log("Keys", dbKeys);
                }
            } else {
                setDbData("Not found");
            }
        };
        fetchData();
    }, [displayField]);

    return (
        <Row className="mt-3">
            {/* <Card>
                <h2>{displayField}</h2>
                {dbData.map((data, id) => (
                    <>
                        <div key={id}>
                            {Object.keys(data).map((objectKey) => (
                                <p>
                                    <b>{objectKey}:</b> {data[objectKey]}
                                </p>
                            ))}
                        </div>
                        <hr />
                    </>
                ))}
            </Card> */}
            <Card>
                <h2>{displayField}</h2>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr className="bg-dark">
                            {dbKeys.map((objectKey, id) => (
                                <th key={id}>
                                    <h5 style={{color: "white"}}>
                                        {objectKey}
                                    </h5>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {dbData.map((data, id) => (
                            <tr>
                                {Object.keys(data).map((objectKey) => (
                                    <td key={objectKey + id}>
                                        {data[objectKey]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </Row>
    );
}
