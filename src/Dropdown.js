import React, { Component } from 'react'
import { DropdownH } from './Styles'


export default class Dropdown extends Component {
	render() {
		return (
			<div>
				<DropdownH open={this.props.open} onClick={this.props.onClick(this.props.name)}>{this.props.label}</DropdownH>
	  			<div style={{ color: 'white', display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', justifyContent: 'center' }}>
				  {this.props.open ? this.props.children : null}
				</div>
			</div>
		)
	}
}
