import * as C from './style';
import {Item} from '../../types/Item';

type Props ={
    item: Item;
}

export let ListItem = ({item}:Props)=>{
    return(
        <C.Container>
            ...
        </C.Container>
    );
};