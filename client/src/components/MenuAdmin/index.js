import React from "react";
import User from "../../assets/img/user.png"
 const MenuAdmin = ()=>{
    return(

        <div>
            <span id="div-menu">
                <div id="menu-options">
                    <ul id="options">
                        <hr/>

                            
                        <li id="seller"> <img src={User}/>
                                <a> Usuários</a>
                            </li>
                            <hr/>   
                                <li id="cleint"> <img src="/img/cleint.png"/>
                                    <a > Fornecedores</a>
                                </li>
                                <hr/>
                                <li id="represented"> <img src="/img/home.png"/>
                                    <a> Representada</a>
                                </li>
                                <hr/>
                                <li id="payment"> <img src="/img/payment-plans.png"/>
                                    <a > Planos </a>
                                </li>
                                <hr/>
                                <li id="price"> <img src="/img/price.png"/>
                                    <a > Preços</a>
                                </li>
                                <hr/>
                                <li id="product"> <a href="/administrator/product" ><img src="/img/product.png"/></a> <a> Produtos</a>
                                </li>
                                <hr/>
                                <li id="requests"> <img src="/img/cart.png"/>
                                    <a>Pedidos</a>
                                </li>
                                <hr/>
                                <li id="report"> <a ><img src="/img/report.png"/></a>
                                    <a>Relatórios</a>
                                </li>
                                <hr/>

                    </ul>
                </div>

            </span>
        </div>
    )
 }

 export default MenuAdmin;