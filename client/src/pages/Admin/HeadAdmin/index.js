import React from "react";
import logo from "../../../assets/img/logo.png"
import exit from "../../../assets/img/exit.png"
import man from "../../../assets/img/businessman.png";
import "./styles.css"

const HeadAdmin = () => {
    return (
        <section class="header-container">
            <span className="div-img">
                <ul>
                    <li><img src={logo}/></li>
                </ul>
            </span>

            <span className="div-title">
                <div className="panel">
                    <div className="header-options">
                        <div id="img-Avatar">
                            <div>
                                <ul>
                                    <li id="avatar"> <img src={man}/> </li>
                                </ul>

                            </div>
                            <div id="avatar-name">
                                <ul>
                                    <li>
                                        Usuário
                                    </li>
                                </ul>

                            </div>

                        </div>

                        <div className="panel-header">
                            <div className="return">
                                <img src={exit} alt=""/>
                            </div>

                            <div className="panel-header-option">
                                <a className="return-a" href="/admin"> Sair </a>
                            </div>
                        </div>

                    </div>
                </div>

            </span>

        </section>

    )

}
export default HeadAdmin;