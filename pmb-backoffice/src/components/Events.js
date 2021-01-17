import axios from 'axios';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import * as React from "react";


export class Events extends React.Component {
    constructor(props) {
        super();
        this._props = props;
        this.state = {};
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitInsert = this.onSubmitInsert.bind(this);
        this.onSubmitUpdate = this.onSubmitUpdate.bind(this);
        this.onSubmitDelete = this.onSubmitDelete.bind(this);
        this.onSubmitShowEvent = this.onSubmitShowEvent.bind(this);
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitInsert() {


        let promisePost = axios.post("https://localhost:44379/api/Eventos", {


                "EquipoLocal": this.state.localTeam,
                "EquipoVisitante": this.state.foreignTeam,
                "Fecha": this.state.dateInsert

            }, {headers: {'Access-Control-Allow-Origin': '*'}}
        ).then(response => {

        }).catch(e => {
            console.log(e);
        });
        console.log(promisePost)

    }

    onSubmitUpdate() {

        let promisePost = axios.put("https://localhost:44379/api/Eventos/Put/id=" + this.state.eventIdPut + "/fecha=" + this.state.datePut, {}, {headers: {'Access-Control-Allow-Origin': '*'}}
        ).then(response => {

        }).catch(e => {
            console.log(e);
        });

    }

    onSubmitDelete() {


        let promisePost = axios.delete("https://localhost:44379/api/Eventos/" + this.state.eventIdDelete, {}, {headers: {'Access-Control-Allow-Origin': '*'}}
        ).then(response => {

        }).catch(e => {
            console.log(e);
        });
        console.log(promisePost)

    }

    onSubmitShowEvent() {


        let promisePost = axios.get(this._props.command + "GetDate/fecha=" + this.state.dateSelect, {headers: {'Access-Control-Allow-Origin': '*'}}
        )
        const promiseResult = promisePost.then((resolveResult) => {
            const result = resolveResult.data;
            var tbody = document.getElementById('tbody');

            for (let i = 0; i < result.length; i++) {

                var col = result[i].EventoId + "\n" + result[i].EquipoLocal + "\n" + result[i].EquipoVisitante + "\n" + result[i].Fecha + "\n"
                var tr = "<tr>";
                tr += "<td>" + "Usuario" + [i] + "</td>" + "<td>" + col + "</td></tr>";
                tbody.innerHTML += tr;
            }


        }, (rejectedResult) => {
            console.error(rejectedResult.statusText)
        });

    }

    render() {


        return (
            <div>


                <InputText /*EqLoc*/ hidden={this._props.hiddenInput} placeholder={"Local Team"} name="localTeam"
                                     value={this.state.localTeam} onChange={this.onInputchange}/>
                <InputText /*EqVis*/ hidden={this._props.hiddenInput} placeholder={"Foreing Team"} name="foreignTeam"
                                     value={this.state.foreignTeam} onChange={this.onInputchange}/>
                <InputText /*Date*/ hidden={this._props.hiddenInput} placeholder={"Date"} name="dateInput"
                                    value={this.state.dateInput} onChange={this.onInputchange}/>

                <InputText /*EventId*/ hidden={this._props.hiddenPut} placeholder={"EventId"} type={'number'}
                                       name="eventIdPut" value={this.state.eventIdPut} onChange={this.onInputchange}/>

                <InputText /*Date*/ hidden={this._props.hiddenPut} placeholder={"Date"} name="datePut"
                                    value={this.state.datePut} onChange={this.onInputchange}/>

                <InputText /*EventId*/ hidden={this._props.hiddenDelete} placeholder={"EventId"} type={'number'}
                                       name="eventIdDelete" value={this.state.eventIdDelete}
                                       onChange={this.onInputchange}/>
                <InputText /*Date*/ hidden={this._props.hiddenDate} placeholder={"Date"} name="dateSelect"
                                    value={this.state.dateSelect} onChange={this.onInputchange}/>


                <Button label={"insert Event"} hidden={this._props.hiddenInput} onClick={this.onSubmitInsert}></Button>
                <Button label={"Update Date"} hidden={this._props.hiddenPut} onClick={this.onSubmitUpdate}></Button>
                <Button label={"Delete Event"} hidden={this._props.hiddenDelete} onClick={this.onSubmitDelete}></Button>
                <Button label={"Show Event Date"} hidden={this._props.hiddenDate}
                        onClick={this.onSubmitShowEvent}></Button>

            </div>
        );


    }
}
