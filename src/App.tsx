import {useState} from 'react';
import * as C from './App.styles';

let App = ()=>{
  let [list, setList] = useState([]);

  return(
    <C.Container>
      <C.Area>
        <C.Header>iNotes</C.Header>
      </C.Area>
    </C.Container>
  );
}

export default App;