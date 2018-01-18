import styled from 'styled-components'


export const Label = styled.label`
color: #fff;
height: 30px;
line-height: 30px;
`
export const DropdownH = styled.div`
display:flex;
flex-flow: row wrap;
align-items:center;
justify-content:center;
height: 40px;
color:white;
border-top: 1px solid #444;
border-bottom: 1px solid #444;
cursor: pointer;
background:${({ open }) => open ? '#777' : 'inherit'};
padding:10px;
`
export const Oa = styled.div`
	background: #222;
	grid-area: oa;
	display:flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`
export const Theme = styled.div`
	background: #333333;
	overflow-y:hidden;
	z-index: 3;
	position: absolute;
	width:750px;
	left: calc(-375px + 50vw);
	display: grid;
	grid-template-columns: repeat(8, max-content);
	grid-template-rows: 1fr;
	justify-content: space-evenly;
`
export const Gen2 = styled.div`
	position: absolute;
	width: 600px;
	height: 300px;
	top:20%;
	left: calc(-300px + 50vw);
	z-index: 3;
	background: #222;
	overflow-y: scroll;
	color: white;
`
export const Gen = styled.button`
	position: absolute;
	width: 200px;
	left: calc(-100px + 50vw);
	top: 10%;
	border: none;
	border: 1px solid #222;
	height: 40px;
	background: #222;
	color:white;
`

export const Input = styled.input`
    padding: 0;
	border: none; 
	margin: 5px;
	height: 25px;
	width: calc(100% - 10px);
`