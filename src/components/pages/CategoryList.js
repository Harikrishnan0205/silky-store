import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import '../../App.scss';

const CatgoryList = ({ displaydata }) => {

    const [display, ondisplaydata] = useState(null);
    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = localStorage.getItem('token'); // Or another secure place
        console.log("tockendata", storedToken)
        if (storedToken) setToken(storedToken);
    }, []);


    useEffect(() => {
        if (displaydata && token) {
            axios.post(
                'http://localhost:5000/api/categorycustom',
                { categoryName: displaydata },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
                .then((response) => {
                    console.log(response.data);
                    ondisplaydata(response.data);
                })
                .catch((error) => {
                    console.log(error);
                    if (error.response) {
                        // Server responded with a status other than 2xx
                        if (error.response.status === 401) {
                            const { message } = error.response.data;
                            if (message === "Token has expired.") {
                                alert("Session Expired", "Your session has expired. Please log in again.");
                                // Redirect user to the login screen or handle re-login
                            } else {
                                alert("Authentication Error", message);
                            }
                        } else {
                            alert("Error", `Server error: ${error.response.status}`);
                        }
                    } else if (error.request) {
                        // Request was made but no response was received
                        alert("Network Error", "Unable to reach the server. Please check your internet connection.");
                    } else {
                        // Something else caused the error
                        alert("Error", error.message);
                    }
                });
        }
    }, [displaydata, token]);

    function calculatediscound(price, discount) {
        const orginalprice = parseFloat(price);
        const orginaldiscount = parseFloat(discount);

        const discountAmount = orginalprice * (orginaldiscount / 100);

        const orginaldiscountprice = Math.round(orginalprice - discountAmount)

        return orginaldiscountprice
    }


    return (
        <div>
            <div style={styles.container}>
                {
                    display && display.map((item, index) => (
                        <div key={index}>
                            <div style={styles.item}>
                                <div>
                                    <img src={item.productdata.productImg} alt={item.productdata.productName} />
                                </div>

                            </div>
                            <div style={styles.producttext}>
                                <p>{item.productdata.productName}</p>
                                <p>{item.productdata.productDec}</p>
                            </div>
                            <div style={styles.pricelist}>
                                <i className="bi bi-arrow-down-circle pr-2 me-1" style={{ color: 'green' }}></i>
                                <p className="pr-2" style={{ color: 'green' }}>{item.productdiscount[0].discountPersentage}</p>
                                <i className="bi bi-currency-rupee ms-2" style={{ color: 'grey' }}></i>
                                <p className="pr-2" style={{ textDecoration: 'line-through', color: 'gray' }}>{item.productdata.price}</p>
                                <i className="bi bi-currency-rupee ms-2" style={{ fontWeight: 'bold' }}></i>
                                <p className="" style={{ fontWeight: 'bold' }}>{calculatediscound(item.productdata.price, item.productdiscount[0].discountPersentage)}</p>
                            </div>
                            <div className=" d-flex flex-row justify-content-center align-items-center">
                                <button className="btn" style={styles.crtbtn}><i class="bi bi-cart-check-fill"></i> Add to Cart</button>
                                <button className="btn ms-2" style={styles.favbtn}><i class="bi bi-heart-fill"></i></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        overflowX: "auto",
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        whiteSpace: "nowrap",

    },
    item: {
        padding: "10px",
        margin: "5px",
        backgroundColor: "#ddd",
        borderRadius: "3px",
        minWidth: "100px",
        textAlign: 'center',

    },
    producttext: {
        whiteSpace: "normal",
        textAlign: 'center'

    },
    pricelist: {
        display: 'flex',
        justifyContent: 'center',

    },
    crtbtn: {
        width: "80%",
        backgroundColor: '#AD778D',
        color: 'white'
    },
    favbtn: {
        backgroundColor: '#AD778D',
        color: 'white'
    }

};

export default CatgoryList;