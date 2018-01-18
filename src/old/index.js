import React, { Component } from 'react'
import { render } from 'react-dom'
import { registerHotModule } from 'components/AppRouter/registerHotModule'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import App from 'App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import ThemeGenerator from 'ThemeGenerator'

//TODO Check Hot Reloading
class AppRouter extends Component {
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
	isHexaColor = (sNum) => {
		return (typeof sNum === "string") && sNum.length === 6
			&& !isNaN(parseInt(sNum, 16))
	}
	handleChange = (theme) => {
		console.log(theme)
		this.setState({
			theme: theme
		})
	}
	renderWithNewTheme = () => (<App theme={this.state.theme} />)
	render() {
		return (
			<Router>
				<div style={{ display: 'flex', flexFlow: 'row nowrap', maxHeight: '100vh' }}>
					{/* <div style={{ alignSelf: 'left', minWidth: 300 }}>
						<ThemeGenerator submitTheme={this.handleChange} />
					</div> */}
					<div style={{ alignSelf: 'right', overflow: 'hidden' }}>
						<Route path='/' component={this.renderWithNewTheme} />
					</div>
				</div>
			</Router>
		)
	}
}

render(
	<AppRouter />,
	document.getElementById('root')
)

registerHotModule()
registerServiceWorker()

