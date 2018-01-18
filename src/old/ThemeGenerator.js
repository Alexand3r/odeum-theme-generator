import React, { Component } from 'react'
import styled from 'styled-components'

const Input = styled.input`
	background: ${props => props.value};
	color: ${props => getContrast50(props.value)};
	border-radius: 5px;
	padding: 5px;
	margin: 5px;
	&:focus{
		border: 1px solid blue;
	}
`
function getContrast50(hexcolor) {
	hexcolor = hexcolor.substr(1, 6)
	var r = parseInt(hexcolor.substr(0, 2), 16)
	var g = parseInt(hexcolor.substr(2, 2), 16)
	var b = parseInt(hexcolor.substr(4, 2), 16)
	var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
	return (yiq <= 128) ? 'white' : 'black'
}
export default class ThemeGenerator extends Component {
	constructor(props) {
		super(props)

		this.state = {
			theme: {
				header: {
					background: '#2C3E50',
					color: '#FFF'
				},

				menu: {
					background: '#3B97D3',
					color: '#FFF',
					selected: '#216795',
					hover: '#81C1EA',
					bottomBorder: '1px solid #3087bf'
				},

				footer: {
					background: '#F7F7F7',
					color: '#5E5E5E'
				},

				workspace: {
					background: '#ECF0F1',
					color: '#000'
				},

				tab: {
					background: '#3B97D3',
					color: '#FFF',
					selected: '#3B97D3',
					hover: '#81C1EA',
					unselected: '#E3E5E5'
				},
				icon: {
					default: '#34495D',
					selected: '#FFF'
				}
			}
		}
	}
	handleChange = (component, section) => (e) => {
		this.setState({
			theme: {
				...this.state.theme,
				[component]: {
					...this.state.theme[component],
					[section]: e.target.value
				}
			}
		})
	}

	submit = () => {
		this.props.submitTheme(this.state.theme)
	}
	render() {
		return (
			<div style={{ display: 'flex', flexFlow: 'column wrap', maxHeight: '100vh' }}>
				<button onClick={this.submit}>Submit Changes</button>
				<label>Header Background</label>
				<Input onChange={this.handleChange('header', 'background')} value={this.state.theme.header.background} />
				<label>Menu Background Panel Color</label>
				<Input onChange={this.handleChange('menu', 'background')} value={this.state.theme.menu.background} />
				<label>Menu Text Color</label>
				<Input onChange={this.handleChange('menu', 'color')} value={this.state.theme.menu.color} />
				<label>Menu Item Selected</label>
				<Input onChange={this.handleChange('menu', 'selected')} value={this.state.theme.menu.selected} />
				<label>Menu Item Hover</label>
				<Input onChange={this.handleChange('menu', 'hover')} value={this.state.theme.menu.hover} />
				<label>Menu Item Border</label>
				<Input onChange={this.handleChange('menu', 'bottomBorder')} value={this.state.theme.menu.bottomBorder} />
				<label>footer background</label>
				<Input onChange={this.handleChange('footer', 'background')} value={this.state.theme.footer.background} />
				<label>footer text color</label>
				<Input onChange={this.handleChange('footer', 'color')} value={this.state.theme.footer.color} />
				<label>workspace background</label>
				<Input onChange={this.handleChange('workspace', 'background')} value={this.state.theme.workspace.background} />
				<label>workspace color</label>
				<Input onChange={this.handleChange('workspace', 'color')} value={this.state.theme.workspace.color} />
				<label> Tab Background</label>
				<Input onChange={this.handleChange('tab', 'background')} value={this.state.theme.tab.background} />
				<label>Tab text color</label>
				<Input onChange={this.handleChange('tab', 'color')} value={this.state.theme.tab.color} />
				<label>Tab Selected Background</label>
				<Input onChange={this.handleChange('tab', 'selected')} value={this.state.theme.tab.selected} />
				<label>Tab Unselected Background</label>
				<Input onChange={this.handleChange('tab', 'unselected')} value={this.state.theme.tab.unselected} />
				<label>Tab Hover</label>
				<Input onChange={this.handleChange('tab', 'hover')} value={this.state.theme.tab.hover} />
				<label>Icon inactive</label>
				<Input onChange={this.handleChange('icon', 'default')} value={this.state.theme.icon.default} />
				<label>Icon active</label>
				<Input onChange={this.handleChange('icon', 'selected')} value={this.state.theme.icon.selected} />
			</div>
		)
	}
}
