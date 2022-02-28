import styled from 'styled-components';

type PropsContainer = {
    done: boolean;
}

export let Container = styled.div(({done}: PropsContainer)=>(
    `
        display: flex;
        background-color: ${done ? '#0F0':'#20212C'};
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        align-items: center;
        transition: linear 0.1s;

        input{
            width: 25px;
            height: 25px;
            margin-right: 5px;
        }

        label{
            color: ${done ? '#287233':'#CCC'}
        }
    `
));