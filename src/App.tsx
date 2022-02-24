import {useState} from 'react';
import * as C from './App.styles';
import {Item} from './types/Item'

let App = ()=>{
  let [list, setList] = useState<Item[]>([]);

  return(
    <C.Container>
      <C.Area>
        <C.Header>iNotes</C.Header>
      </C.Area>
    </C.Container>
  );
}

export default App;