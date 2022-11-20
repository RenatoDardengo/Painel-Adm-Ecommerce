import React, { useState } from "react";

import addUser from "../../../assets/img/addUser.png";
import client from "../../../assets/img/client.png";
import home from "../../../assets/img/home.png";
import payment from "../../../assets/img/paymentPlans.png";
import price from "../../../assets/img/price.png";
import productImg from "../../../assets/img/product.png";
import cart from "../../../assets/img/cart.png";
import report from "../../../assets/img/report.png";
import arrow from "../../../assets/img/arrow.png";
import ProductShow from "../products/ProductShow";
import ProductCreate from "../products/ProductCreate";

import "./styles.css"
const BodyAdmin = () => {
    const [prodIndex,setProdIndex]=useState("")
    const [product, setProdutc]=useState(false)
    const [prodCreate, setProdCreate]=useState (false)
    const handleModalShow = () => {
        alert("Funcionalidade em desenvolvimento!")
    }

    const handleProdIndex=()=>{
        if (prodCreate) {
            setProdIndex(prodCreate)
        }else if (product){
            setProdIndex(product)

        }
    }
    return (

        <section className="main-container">
            <span className="div-menu">
                <div className="menu-options">
                    <ul className="options">
                        <hr />
                        <li id="seller"> <img src={addUser} alt="" />
                            <a onClick={handleModalShow}> Usuários</a>
                        </li>
                        <hr />

                        <li id="cleint"> <img src={client} alt="" />
                            <a onClick={handleModalShow}> Fornecedores</a>
                        </li>
                        <hr />
                        <li id="represented"> <img src={home} alt="" />
                            <a onClick={handleModalShow}> Representada</a>
                        </li>
                        <hr />
                        <li id="payment"> <img src={payment} alt="" />
                            <a onClick={handleModalShow}> Planos </a>
                        </li>
                        <hr />
                        <li id="price"> <img src={price} alt="" />
                            <a onClick={handleModalShow}> Preços</a>
                        </li>
                        <hr />
                        <li id="product"> <img src={productImg} alt="" />
                            <a onClick={()=>setProdutc(true)}> Produtos</a>
                        </li>
                        <hr />
                        <li id="requests"> <img src={cart} alt="" />
                            <a onClick={handleModalShow}>Pedidos</a>
                        </li>
                        <hr />
                        <li id="report"><img src={report} alt="" />
                            <a onClick={handleModalShow}>Relatórios</a>
                        </li>
                        <hr />

                    </ul>
                </div>

            </span>

            <span className="div-body">
                <hr />
               
                {!product ?
                 <><div className="nav">
                        <div><img src={arrow} alt="" /></div>
                        <div className="nav-title">Administrador</div>
                    </div><h2>Bem Vindo!</h2></> : <ProductShow />
                }
                
                


            </span>

        </section>
    )
}

export default BodyAdmin;