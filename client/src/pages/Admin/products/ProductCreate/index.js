import React from "react";
import arrow from "../../../../assets/img/arrow.png";
import "./styles.css"

const ProductCreate = () => {
    return (
        <span id="div-body">

            <div id="nav">
                <div>
                    <img src={arrow} alt="" />
                </div>
                <div id="nav-title">
                    Administrador/ Produtos / Cadastrar
                </div>

            </div>
            <section id="frm">


                <div className="div-input">
                    <div class="Product-input">
                        <label>
                            Genero
                        <select name="genre" id="genre-id">
                            <option value="" selected>Selecione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>
                        </label>
                        
                    </div>
                    <div class="Product-input">
                        <label >Marca
                        <select name="mark" id="mark-id">
                            <option value="" selected>Selecione</option>
                            <option value="Adidas">Adidas</option>
                            <option value="Mizuno">Mizuno</option>
                            <option value="Nike">Nike</option>
                        </select>
                        </label>
                    </div>

                    <div class="Product-input">
                        <label>Estilo
                        <select name="style" id="style-id">
                            <option value="" selected>Selecione</option>
                            <option value="Esportivo">Esportivo</option>
                            <option value="Casual">Casual</option>
                            <option value="Social">Social</option>
                        </select>
                        </label>
                    </div>
                    <div class="Product-input">
                        <label>Titulo
                        <input type="text" name="productModel" id="title-id"/> 
                        </label>
                    </div>

                    <div class="Product-input">
                        <label>Numero
                        <input type="text" name="number" id="number-id" />
                        </label>
                    </div>

                    <div class="Product-input">
                        <label>Custo
                        <input type="text" name="costValue" id="cost-id" />
                        </label>
                    </div>

                    <div class="Product-input">
                        <label>Venda
                        <input type="text" name="saleValue" id="sale-id" />
                        </label>
                    </div>

                    <div class="Product-input">
                        <label>Especial
                        <input type="text" name="specialValue" id="special-id" />
                        </label>
                    </div>

                    <div class="Product-input">
                        <label>Quantidade
                        <input type="text" name="quantity" id="quantity-id" />
                        </label>
                    </div>

                </div>

                <div class="container-input">
                    <div class="Product-input">
                        <label>Descrição
                        <textarea name="description" id="description-id"> </textarea>
                        </label>
                    </div>

                </div>
                <div class="Product-input">
                    <label class="picture" for="picture-input" tabIndex="0">
                        <input type="file" accept="image" name="picture-input" id="picture-input" />
                        <span class="picture-image"></span>
                    </label>

                </div>


                <div id="btn-options">
                    <input type="submit" value="Gravar" class="btn"/>
                    <input type="reset" value="Limpar" class="btn"/>
                </div>


            </section>



        </span>
    )

}

 export default ProductCreate;