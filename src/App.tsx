import {useState} from 'react';
import * as C from './App.styles';
import {Item} from './types/Item';
import {ListItem} from './components/ListItem/index';
import {AddArea} from './components/AddArea/index';

let App = ()=>{
  let [list, setList] = useState<Item[]>([
    {id:1, name: 'comprar pão', done:false},
    {id:2, name: 'comprar bolo', done:true}
  ]);

  return(
    <C.Container>
      <C.Area>
        <C.Header>iNotes</C.Header>

        <AddArea />

        {list.map( (item, index)=>(
          <ListItem key={index} item={item}/>
        ) )}
        
      </C.Area>
    </C.Container>
  );
}

export default App;