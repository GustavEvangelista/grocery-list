import styled from 'styled-components'

export const Container = styled.div`
background-color: #9daadd;
padding: 20px;
border-radius: 10px;


h1 {
    color: #fff;
    font-weight: bold;
}

input {
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
    outline: none;
    padding-left:10px;
    
}
`


export const AddButton = styled.button`
    background-color: #115dc1;
    color: #fff;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-left: 10px;

    &:hover {
        opacity: 0.8;
        transition: 1s;
    }
`
export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 15px;
    padding: 0 10px;

    p {
        text-transform: capitalize;
        font-weight: bold;

    }
`
export const TrashButton = styled.button`
background: transparent;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 20px;
`


