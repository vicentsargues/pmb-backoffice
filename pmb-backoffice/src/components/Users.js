import axios from 'axios';
import {Button} from "primereact/button";
import React, { Component } from "react";

import {InputText} from "primereact/inputtext";


export class Users extends React.Component{

    constructor(props) {
        super();
        this._props = props;
        this.state = {
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.onSubmitFormAll = this.onSubmitFormAll.bind(this);
        this.onSubmitFormDelete = this.onSubmitFormDelete.bind(this);
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onSubmitForm() {
        const promise = axios.get("https://localhost:44379/api/Usuario/GetEx/" + this.state.selectFilter + "=" + this.state.fname , {headers: {'Access-Control-Allow-Origin': '*'}})
        console.log("https://localhost:44379/api/Usuario/GetEx/" + this.state.fname + "="+this.state.selectFilter )
        const promiseResult = promise.then((resolveResult) => {
                const result = resolveResult.data;
                var tbody = document.getElementById('tbody');

                for (let i = 0; i < result.length; i++) {

                    var col = result[i].Email + "\n" + result[i].Nombre + "\n" + result[i].Apellidos + "\n" + result[i].Edad + "\n" + result[i].CuentaId + "\n" + result[i].Cuenta + "\n" + result[i].UsuarioId + "\n" + result[i].Apuestas
                    var tr = "<tr>";
                    tr += "<td>" + "Usuario" + [i] + "</td>" + "<td>" + col + "</td></tr>";
                    tbody.innerHTML += tr;
                }
            }
            , (rejectedResult) => {
                console.error(rejectedResult.statusText)
            });
    }
    onSubmitFormAll() {
        const promise = axios.get("https://localhost:44379/api/Usuario", {headers: {'Access-Control-Allow-Origin': '*'}})
        const promiseResult = promise.then((resolveResult) => {
                const result = resolveResult.data;
                var tbody = document.getElementById('tbody');

                for (let i = 0; i < result.length; i++) {

                    var col = result[i].Email + "\n" + result[i].Nombre + "\n" + result[i].Apellidos + "\n" + result[i].Edad + "\n" + result[i].CuentaId + "\n" + result[i].Cuenta + "\n" + result[i].UsuarioId + "\n" + result[i].Apuestas
                    var tr = "<tr>";
                    tr += "<td>" + "Usuario" + [i] + "</td>" + "<td>" + col + "</td></tr>";
                    tbody.innerHTML += tr;
                }
            }
            , (rejectedResult) => {
                console.error(rejectedResult.statusText)
            });
    }
    onSubmitFormDelete() {
        const promise = axios.delete("https://localhost:44379/api/Usuario", {headers: {'Access-Control-Allow-Origin': '*'}})
        const promiseResult = promise.then((resolveResult) => {
            }
            , (rejectedResult) => {
                console.error(rejectedResult.statusText)
            });
    }

    render() {
        const {items} = this.state;
        const options = [
            {
                label: "",
                value: "",
            },
            {
                label: "mail",
                value: "mail",
            },
            {
                label: "surname",
                value: "surname",
            },
            {
                label: "name",
                value: "name",
            },
        ];
        return (
            <div>
                <InputText hidden={this._props.hiddenInput} name="fname"  value={this.state.fname}
                           onChange={this.onInputchange}/>
                <select hidden={this._props.hiddenInput} name="selectFilter"  value={this.state.selectFilter} onChange={this.onInputchange} >
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>



                <Button hidden={this._props.hiddenSelect} label={"Search All"} onClick={this.onSubmitFormAll}></Button>


                <Button hidden={this._props.hiddenInput} label={"Search"} onClick={this.onSubmitForm} ></Button>


                <Button hidden={this._props.hiddenDelete} label={"Delete All"} onClick={this.onSubmitFormDelete}></Button>



            </div>

        );


    }
}
