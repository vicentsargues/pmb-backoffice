import axios from 'axios';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import * as React from "react";


export class Bets extends React.Component {
    constructor(props) {
        super();
        this._props = props;
        this.state = {
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitInsert = this.onSubmitInsert.bind(this);
        this.onSubmitFormSelect = this.onSubmitFormSelect.bind(this);
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    onSubmitInsert() {


        let promisePost
        let market = 1.5;

        promisePost = axios.post("https://localhost:44379/api/Mercado", {

                "Over_Under": "over",
                "CuotaUnder": this.state.cuotaUnder,
                "CuotaOver": this.state.cuotaOver,
                "DineroUnder": this.state.dineroUnder,
                "DineroOver": this.state.dineroOver,
                "MercadoId":this.state.mercadoId ,
                "Mercado_Tipo": 1.5,
                "EventoId": this.state.evento,
                "Evento": null,

                "Apuestas": null


            }, {headers: {'Access-Control-Allow-Origin': '*'}}
        ).then(response => {

        }).catch(e => {

            console.log(e);
        });
        console.log(this.state.cuotaOver)
        promisePost = axios.post("https://localhost:44379/api/Mercado", {

                "Over_Under": "over",
                "CuotaUnder": this.state.cuotaUnder,
                "CuotaOver": this.state.cuotaOver,
                "DineroUnder": this.state.dineroUnder,
                "DineroOver": this.state.dineroOver,
                "MercadoId": this.state.mercadoId+1,
                "Mercado_Tipo":2.5,
                "EventoId": this.state.evento,
                "Evento": null,

                "Apuestas": null

            }, {headers: {'Access-Control-Allow-Origin': '*'}}
        ).then(response => {

        }).catch(e => {
            console.log(e);
        });
        promisePost = axios.post("https://localhost:44379/api/Mercado", {

                "Over_Under": "over",
                "CuotaUnder": this.state.cuotaUnder,
                "CuotaOver": this.state.cuotaOver,
                "DineroUnder": this.state.dineroUnder,
                "DineroOver": this.state.dineroOver,
                "MercadoId": this.state.mercadoId+2,
                "Mercado_Tipo": 3.5,
                "EventoId": this.state.evento,
                "Evento": null,

                "Apuestas": null

            }, {headers: {'Access-Control-Allow-Origin': '*'}}
        ).then(response => {

        }).catch(e => {
            console.log(e);
        });
        console.log(promisePost)


    }

    onSubmitFormSelect() {

        const promise = axios.get("https://localhost:44379/api/Usuario/GetBets/" +this.state.selectFilter + "=" +this.state.fname, {headers: {'Access-Control-Allow-Origin': '*'}})
        const promiseResult = promise.then((resolveResult) => {

                const result = resolveResult.data;
                var tbody = document.getElementById('tbody');

                for (let i = 0; i < result.length; i++) {

                    var col = result[i].ApuestaId + "\n" + result[i].Fecha + "\n" + result[i].TipoMercado + "\n" + result[i].MercadoId + "\n" + result[i].Over_Under + "\n" + result[i].UsuarioId + "\n" + result[i].DineroApostado + "\n" + result[i].Cuota
                    var tr = "<tr>";
                    tr += "<td>" + "Apuesta" + [i] + "</td>" + "<td>" + col + "</td></tr>";
                    tbody.innerHTML += tr;

                }
            }
            , (rejectedResult) => {
                console.error(rejectedResult.statusText)
            });


    }

    render() {

        const optionsOverUnder = [
            {
                label: "",
                value: "",
            },
            {
                label: "Over",
                value: "over",
            },
            {
                label: "Under",
                value: "under",
            },

        ];
        const optionsSelect = [
            {
                label: "",
                value: "",
            },
            {
                label: "market",
                value: "market",
            },
            {
                label: "mail",
                value: "mail",
            },
            {
                label: "event",
                value: "event",
            }

        ];
        return (

            <div>

                <select hidden={this._props.hiddenInputMarket} name="selectOverUnder"  value={this.state.selectOverUnder} onChange={this.onInputchange} >
                    {optionsOverUnder.map((optionsOverUnder) => (
                        <option value={optionsOverUnder.value}>{optionsOverUnder.label}</option>
                    ))}
                </select>
                <InputText hidden={this._props.hiddenGet} name="fname"  value={this.state.fname}
                           onChange={this.onInputchange}/>
                <select hidden={this._props.hiddenGet} name="selectFilter"  value={this.state.selectFilter} onChange={this.onInputchange} >
                    {optionsSelect.map((optionsSelect) => (
                        <option value={optionsSelect.value}>{optionsSelect.label}</option>
                    ))}
                </select>

                <InputText /*CuotaUnder*/ hidden={this._props.hiddenInputMarket} placeholder={"CuotaUnder"}
                                          name="cuotaUnder"  value={this.state.cuotaUnder}
                                          onChange={this.onInputchange}/>
                <InputText /*CuotaOver*/ hidden={this._props.hiddenInputMarket} placeholder={"CuotaOver"} type={'number'}
                                         name="cuotaOver"  value={this.state.cuotaOver}
                                         onChange={this.onInputchange}/>
                <InputText /*DineroUnder*/ hidden={this._props.hiddenInputMarket} placeholder={"DineroOver"} type={'number'}
                                           name="dineroOver"  value={this.state.dineroOver}
                                           onChange={this.onInputchange}/>
                <InputText /*DineroOver*/ hidden={this._props.hiddenInputMarket} placeholder={"DineroUnder"} type={'number'}
                                          name="dineroUnder"  value={this.state.dineroUnder}
                                          onChange={this.onInputchange}/>
                <InputText /*Evento*/ hidden={this._props.hiddenInputMarket} placeholder={"Evento"} type={'number'}
                                      name="evento"  value={this.state.evento}
                                      onChange={this.onInputchange}/>
                <InputText /*Evento*/ hidden={this._props.hiddenInputMarket} placeholder={"MercadoId"} type={'number'}
                                      name="mercadoId"  value={this.state.mercadoId}
                                      onChange={this.onInputchange}/>
                <Button hidden={this._props.hiddenInputMarket} label={"insert Markets"} onClick={this.onSubmitInsert}></Button>
                <Button hidden={this._props.hiddenGet} label={"Show Bets"} onClick={this.onSubmitFormSelect}></Button>


            </div>

        )
            ;
    }



}
