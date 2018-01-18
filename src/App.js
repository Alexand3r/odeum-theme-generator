import React, { Component } from 'react'
import { AppContainer, Header, Menu, MenuPanel, Tab, Footer } from 'odeum-app'
import Dropdown from './Dropdown'
import { Label, Input, Gen, Gen2, Oa, Theme } from './Styles'
import theme from './default'
import { DisplayProps } from './GenerateTheme'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			gen: false,
			app: false,
			header: false,
			menu: false,
			footer: false,
			workspace: false,
			tab: false,
			icon: false,
			quicknav: false,
			logo: false,
			input: false,
			button: false,
			theme: theme		}
	}
	handleQuickNavChange = (comp, name) => e => {
		e.preventDefault()
		this.setState({
			theme: { ...this.state.theme,  
			 quicknav: {
				 ...this.state.theme.quicknav,
				 [comp]: {
					 ...this.state.theme.quicknav[comp],
					 [name]: e.target.value
				 }
			 } }
		})
	}
	handleChange = (comp, name) => e => {
		e.preventDefault()
		this.setState({
			theme: {
				...this.state.theme,
				[comp]: {
					...this.state.theme[comp],
					[name]: e.target.value

				}
			}
		})
	}
	handleOpen = (name) => e => {
		e.preventDefault()
		this.setState({ [name]: !this.state[name] })
	}
	generateTheme = () => {
		this.setState({ gen: !this.state.gen })
	}
	render() {
		const { app, header, theme, footer, workspace, menu, tab, quicknav } = this.state
		return (
			<div>
				<Theme>
					<Dropdown name={'app'} label={'Application'} open={app} onClick={this.handleOpen}>
						<Label>App Height</Label>
						<Input value={theme.app.height} onChange={this.handleChange('app', 'height')} />
						<Label>App Width</Label>
						<Input value={theme.app.width} onChange={this.handleChange('app', 'width')} />
						<Label>App Grid Area</Label>
						<Input value={theme.app.gridArea} onChange={this.handleChange('app', 'gridArea')} />
						<Label>App Columns</Label>
						<Input value={theme.app.gridTemplateColumns} onChange={this.handleChange('app', 'gridTemplateColumns')} />
						<Label>App Rows</Label>
						<Input value={theme.app.gridTemplateRows} onChange={this.handleChange('app', 'gridTemplateRows')} />
					</Dropdown>

					<Dropdown name={'header'} label={'Header'} open={header} onClick={this.handleOpen}>
						<Label>Header Height</Label>
						<Input value={theme.header.height} onChange={this.handleChange('header', 'height')} />
						<Label>Header Background Color</Label>
						<Input type={'color'} value={theme.header.background} onChange={this.handleChange('header', 'background')} />
						<Label>Header Color</Label>
						<Input type={'color'} value={theme.header.color} onChange={this.handleChange('header', 'color')} />
						<Label>Logo Height</Label>
						<Input value={theme.logo.height} onChange={this.handleChange('logo', 'height')} />
						<Label>Logo Margin</Label>
						<Input value={theme.logo.margin} onChange={this.handleChange('logo', 'margin')} />
					</Dropdown>
					<Dropdown name={'footer'} label={'Footer'} open={footer} onClick={this.handleOpen}>
						<Label>Footer Background Color</Label>
						<Input type={'color'} value={theme.footer.background} onChange={this.handleChange('footer', 'background')} />
						{/* Useless */}
						<Label>Footer Color</Label>
						<Input type={'color'} value={theme.footer.color} onChange={this.handleChange('footer', 'color')} />
					</Dropdown>
					<Dropdown name={'workspace'} label={'Workspace'} open={workspace} onClick={this.handleOpen}>
						<Label>Workspace Background Color</Label>
						<Input type={'color'} value={theme.workspace.background} onChange={this.handleChange('workspace', 'background')} />
						{/* Useless */}
						<Label>Workspace Color</Label> 
						<Input type={'color'} value={theme.workspace.color} onChange={this.handleChange('workspace', 'color')} />
					</Dropdown>
					<Dropdown name={'menu'} label={'Menu'} open={menu} onClick={this.handleOpen}>
						<Label>Menu Background Color</Label>
						<Input type={'color'} value={theme.menu.background} onChange={this.handleChange('menu', 'background')} />
						<Label>Menu Color</Label> 
						<Input type={'color'} value={theme.menu.color} onChange={this.handleChange('menu', 'color')} />
						<Label>Menu Selected/Active Item</Label> 
						<Input type={'color'} value={theme.menu.selected} onChange={this.handleChange('menu', 'selected')} />
						<Label>MenuItem Color on Hover</Label> 
						<Input type={'color'} value={theme.menu.hover} onChange={this.handleChange('menu', 'hover')} />
						<Label>MenuItem Text color on Hover</Label> 
						<Input type={'color'} value={theme.menu.textHover} onChange={this.handleChange('menu', 'textHover')} />
						<Label>MenuItem Border</Label> 
						<Input value={theme.menu.border} onChange={this.handleChange('menu', 'border')} />
						<Label>Menu Font Size</Label> 
						<Input value={theme.menu.fontSize} onChange={this.handleChange('menu', 'fontSize')} />
					</Dropdown>
					<Dropdown name={'tab'} label={'Tab'} open={tab} onClick={this.handleOpen}>
						<Label>Tab Color</Label> 
						<Input type={'color'} value={theme.tab.color} onChange={this.handleChange('tab', 'color')} />
						<Label>Tab Selected/Active Item</Label> 
						<Input type={'color'} value={theme.tab.selected} onChange={this.handleChange('tab', 'selected')} />
						<Label>Tab Color on Hover</Label> 
						<Input type={'color'} value={theme.tab.hover} onChange={this.handleChange('tab', 'hover')} />
						<Label>Tab Text color unselected</Label> 
						<Input type={'color'} value={theme.tab.unselected} onChange={this.handleChange('tab', 'unselected')} />
					</Dropdown>
					<Dropdown name={'quicknav'} label={'Quick Navigation'} open={quicknav} onClick={this.handleOpen}>
						{/* <Label>Tab Background Color</Label>
						<Input type={'color'} value={theme.tab.background} onChange={this.handleChange('tab', 'background')} /> */}
						<Label>Background Button Color</Label> 
						<Input type={'color'} value={theme.quicknav.button.background} onChange={this.handleQuickNavChange('button', 'background')} />
						<Label>MenuItem unselected BG color</Label> 
						<Input type={'color'} value={theme.quicknav.button.unselected} onChange={this.handleQuickNavChange('button', 'unselected')} />
						<Label>Text Color</Label> 
						<Input type={'color'} value={theme.quicknav.button.color} onChange={this.handleQuickNavChange('button', 'color')} />
						<Label>Tab Text color unselected</Label> 
						<Input type={'color'} value={theme.quicknav.tab.selected} onChange={this.handleQuickNavChange('tab', 'selected')} />
						<Label>Unselected Color</Label>
						<Input type={'color'} value={theme.quicknav.tab.unselected} onChange={this.handleQuickNavChange('tab', 'unselected')} />
					</Dropdown>
				</Theme>
				<Gen onClick={this.generateTheme}>Generate Theme</Gen>
				{this.state.gen === true ? <Gen2><DisplayProps {...this.state.theme}/></Gen2> : null}
				<Oa>
					<AppContainer
						theme={this.state.theme}>
						<Header logo={this.state.theme.logo} avatar={true} />
						<MenuPanel login={false} redirectTo={''}>
							<Menu route={'/page'} label={'Page'}>
								<div>Page</div>
							</Menu>
							<Menu label={'Menu'} route={'/menu'}>
								<Tab label={'Tab'} route={'/tab-1'}>
									<div>Tab 1</div>
								</Tab>
								<Tab label={'Tab 2'} route={'/tab-2'}>
									<div>Tab 2</div>
								</Tab>
							</Menu>
						</MenuPanel>
						<Footer help={false} label={FooterComp}/>
					</AppContainer>
				</Oa>
			</div>
		)
	}
}
const FooterComp = () => {
	return <div> Footer</div>
}
export default App
