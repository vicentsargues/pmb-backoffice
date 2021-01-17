import logo from './logo.svg';
import './App.css';

import {Events} from "./components/Events";
import {InputText} from "primereact/inputtext";
import {Users} from "./components/Users";
import {Bets} from "./components/Bets";






function App() {
  return (
      <div className="App">

          <label >Filter</label>
          <Users command={"https://localhost:44379/api/Usuario/"}hiddenSelect={"false"} hiddenDelete={"false"}/>
          <label >Select All Users</label>
        <Users command={"https://localhost:44379/api/Usuario"}hiddenInput={"false"}hiddenDelete={"false"} />
          <label >Delete All Users</label>

          <Users command={"https://localhost:44379/api/Usuario"}hiddenInput={"false"} hiddenSelect={"false"} />

          <Bets hiddenInputMarket={"false"} command={"https://localhost:44379/api/Usuario/GetBets/"}/>


          <Bets hiddenGet={"false"} command={"https://localhost:44379/api/Mercado"} />
          <label >Insert Event</label>
          <Events hiddenPut={"true"} hiddenDelete={"true"}hiddenDate={"true"} command={"https://localhost:44379/api/Eventos"}  > </Events>
          <Events hiddenInput={"true"} hiddenDelete={"true"}hiddenDate={"true"} command={"https://localhost:44379/api/Eventos/Put"}  > </Events>
          <Events hiddenInput={"true"} hiddenPut={"true"}hiddenDate={"true"} command={"https://localhost:44379/api/Eventos/"}  > </Events>
          <Events hiddenInput={"true"} hiddenPut={"true"} hiddenDelete={"true"}  command={"https://localhost:44379/api/Eventos/"}  > </Events>

          <table>
              <tbody id="tbody"></tbody>
          </table>
      </div>
  )
}
export default App;
