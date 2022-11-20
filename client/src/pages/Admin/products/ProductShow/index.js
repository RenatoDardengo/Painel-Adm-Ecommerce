import React from "react";
import arrow from "../../../../assets/img/arrow.png";
import search from "../../../../assets/img/search.png";
import add from "../../../../assets/img/add.png";
import "./styles.css";
import InputText from "../../../../components/InputText";
import Button from "../../../../components/Button";

const ProductShow = () => {
    return (
        <span id="div-body">
            <div id="nav">
                <div>
                    <img src={arrow} alt="" />
                </div>
                <div id="nav-title"> Administrador/ Produtos
                </div>

            </div>
            <div className="div-table">
                <div>
                    <div className="Product-input">
                        <label>
                            Critério:
                            <select name="column" id="criterion-id" >
                                <option value="" selected>Selecione</option>
                                <option value="genre">Gênero</option>
                                <option value="mark">Marca</option>
                                <option value="style">Estilo</option>
                            </select>
                        </label>
                    </div>
                    <div id="btn-txt">
                        <div id="search">
                            <label for="search-id">Pesquisar:
                                <InputText />
                                <span id="btn" >

                                <Button label={<img src={search} alt=""/>} color="flat" />
                                </span>
                            </label>



                        </div>
                        <div id="btn-img">
                            <Button label={<img src={add} alt="" />} color="flat" />

                        </div>

                    </div>




                </div>
                <section id="product-list">
                    <div class="table-container">
                        <table id="tbl-01">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th class="th-hide">Gênero</th>
                                    <th>Marca</th>
                                    <th>Modelo</th>
                                    <th class="th-hide">Estilo</th>
                                    <th class="th-hide">Numero</th>
                                    <th class="th-hide">Custo</th>
                                    <th class="th-hide2" >Venda</th>
                                    <th class="th-hide">Especial</th>
                                    <th class="th-hide2">Qtde</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>
                                        id
                                    </td>
                                    <td class="th-hide">
                                        genero
                                    </td>
                                    <td>
                                        marca
                                    </td>
                                    <td>
                                        modelo
                                    </td>
                                    <td class="th-hide">
                                        estilo
                                    </td>
                                    <td class="th-hide">
                                        numero
                                    </td>
                                    <td class="th-hide">
                                        custo
                                    </td>
                                    <td class="th-hide2">
                                        valor
                                    </td>
                                    <td class="th-hide">
                                        promocao
                                    </td>
                                    <td class="th-hide2">
                                        quantidade
                                    </td>

                                    <td class="table-actions table-img">
                                        opções
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>


                </section>
            </div>
        </span>
    )
}

export default ProductShow;