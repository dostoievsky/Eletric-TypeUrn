import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e465; 
  position: absolute;
  width: 835px;
  height: 490px;
  left: 14.7%;
  top: 35.2%;
  display: block;

  h1 {
    margin-left: 2%;
    margin-top: 10px;
  }

  h2{
    color: #ff0000;
    text-align: center;
    margin-top: 50px;
  }
`

export const Content = styled.div`

    width: 50px;
    height: 60px;
    border: 2px solid #666;
    font-size: 30px;
    font-weight: 400;

    padding: 10px 2px 2px 2px;
    padding-left: 10px;
    display: inline-block;
    margin-left: 10px;
`

export const BottomContainer = styled.div`
  position: relative;
  top: 12.5vh;
`

export const TopPictureContainer = styled.div`
  position: absolute;
  right: 23.5%;
  top: 3px;
`

export const BottomPictureContainer = styled.div`
  position: absolute;
  right: 23.5%;
  bottom: 240px;
`

export const NumberContainer = styled.div`
  display: inline-flex;
  margin-left: 1%;

`