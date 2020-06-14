import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Navbar, Container, Row } from "react-bootstrap";
import logoTrimmed from "../assets/logo_trimmed.png";
import "../assets/styles/Dashboard.css";
import axios from "axios";

import { axios_base_url, Authorization } from "../config.json";

import Produto from "../components/Produto";

const fetchData = async (id) => {
    const response = await axios.get(`${axios_base_url}/establishment/${id}`, {
        headers: { Authorization },
    });
    return response.data.status ? response.data.data : false;
};

const fetchProducts = async (id) => {
    const response = await axios.get(`${axios_base_url}/products/${id}`, {
        headers: { Authorization },
    });
    // console.log(`${axios_base_url}/products/${id} returned:`, response);
    return response.data.status ? response.data.data : false;
};

export default (props) => {
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);

    if (!sessionStorage.getItem("login_id")) {
        return <Redirect to="/login" />;
    }
    // const token = sessionStorage.getItem("login_token");
    // const email = sessionStorage.getItem("login_email");
    const id = sessionStorage.getItem("login_id");
    useEffect(() => {
        fetchData(id).then((data) => {
            if (!data) {
                alert(
                    "Houve um erro na obtenção dos dados. Por favor, faça login novamente."
                );
                return <Redirect to="/login" />;
            }
            setData(data);
        });
    }, [id]);
    useEffect(() => {
        fetchProducts(id).then((data) => {
            setProducts(data);
        });
    }, [id]);
    if (data)
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>
                        <Link to="/">
                            <img
                                alt=""
                                src={logoTrimmed}
                                height="30"
                                className="d-inline-block align-top"
                            />{" "}
                            Você na Estrada
                        </Link>
                    </Navbar.Brand>
                </Navbar>
                <Container>
                    <Row>
                        <h1>{data.company_name}</h1>
                    </Row>
                    <Row>
                        <h2>Dados:</h2>
                    </Row>
                    <Row>
                        <ul>
                            <li>Nome Fantasia: {data.company_name}</li>
                            <li>
                                Localização: ({data.latitude}, {data.longitude})
                            </li>
                            <li>Email: {data.email}</li>
                        </ul>
                    </Row>
                    <Row>
                        <h2>Produtos</h2>
                    </Row>
                    <div className="new_product">+ Adicionar Produto</div>
                    {products.map((item) => (
                        <Produto
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            cashback={item.cashback}
                            image={item.image}
                        />
                    ))}
                </Container>
            </>
        );
};
