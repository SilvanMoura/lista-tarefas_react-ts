import styled from 'styled-components';

type PropsContainer = {
    done: boolean;
}

export let Container = styled.div(({done}: PropsContainer)=>(
    `
        display: flex;
        background-color: #20212C;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        align-items: center;

        input{
            width: 25px;
            height: 25px;
            margin-right: 5px;
        }

        label{
            color: #CCC;
            background-color: ${done ? '#0F0':'#20212C'};
            text-decoration: ${done ? 'line-through' : 'initial'}
        }
    `
));