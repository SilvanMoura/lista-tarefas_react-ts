import {useState, KeyboardEvent} from 'react';
import * as C from './style';

type PropsTask = {
    onEnter: (taskName: string) => void
}

export let AddArea = ({onEnter}:PropsTask)=>{
    let [inputText, setInputText] = useState('');

    let handleKeyUp = (e: KeyboardEvent)=>{
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }

    return(
        <C.Container>
            <div className="image">📝</div>
            <input 
                type="text"
                placeholder="Adicione aqui uma nova tarefa"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    )
}