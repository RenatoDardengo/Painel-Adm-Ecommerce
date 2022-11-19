import React from "react";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import "./styles.css"
const LoginAdmin = () => {

    return (
        <div id="login-container">
            <h1>Administrador</h1>
            <div className="login-input">
                <label>
                    Usuário:
                    <InputText />
                </label>
                <label>
                    Senha:
                    <InputText type={"password"} />
                </label>
            </div>
            <Button label={"Login"} />



        </div>
    )

}

export default LoginAdmin;