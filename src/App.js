/* global handleToggle, handleClose */

import React, { Component } from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import fusiTheme from './fusiTheme'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import { BrowserRouter, Route } from 'react-router-dom'
import SideBarItem from './SideBarItem'

import './App.css'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleToggle = () => this.setState({ open: !this.state.open })
  handleClose = () => this.setState({ open: false })

  render () {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(fusiTheme)}>
          <div className='App'>
            <AppBar
              title='Title'
              iconClassNameRight='muidocs-icon-navigation-expand-more'
              onLeftIconButtonTouchTap={this.handleToggle}
            />
            <Drawer
              open={this.state.open}
              docked={false}
              onRequestChange={open => this.setState({ open })}
            >
              <SideBarItem
                linkTo='/'
                primaryText='Home'
                handleClose={this.handleClose}
              />
              <SideBarItem
                linkTo='/logos'
                primaryText='Logos'
                handleClose={this.handleClose}
              />
              <SideBarItem
                linkTo='/posters'
                primaryText='Posters'
                handleClose={this.handleClose}
              />
              <SideBarItem
                linkTo='/letterhead'
                primaryText='Letterhead'
                handleClose={this.handleClose}
              />
              <SideBarItem
                linkTo='/share-a-story'
                primaryText='Share a Story'
                handleClose={this.handleClose}
              />
              <SideBarItem
                linkTo='/service-request'
                primaryText='Service Request'
                handleClose={this.handleClose}
              />
              <SideBarItem
                linkTo='/tutorial'
                primaryText='Tutorial'
                handleClose={this.handleClose}
              />
            </Drawer>

            <Route exact path='/' render={() => <h1>Home View</h1>} />
            <Route
              exact
              path='/logos-posters'
              render={() => <h1>Logos and Posters View</h1>}
            />
            <Route exact path='/logos' render={() => <h1>Logos View</h1>} />
            <Route exact path='/posters' render={() => <h1>Posters View</h1>} />
            <Route
              exact
              path='/letterhead'
              render={() => <h1>Letterhead View</h1>}
            />
            <Route
              exact
              path='/share-a-story'
              render={() => <h1>Share a Story View</h1>}
            />
            <Route
              exact
              path='/planning-guide'
              render={() => <h1>Planning Guide View</h1>}
            />
            <Route
              exact
              path='/service-request'
              render={() => <h1>Service Request View</h1>}
            />
            <Route
              exact
              path='/tutorial'
              render={() => <h1>Tutorial View</h1>}
            />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App
