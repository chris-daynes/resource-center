/* global handleToggle, handleClose */

import React, { Component } from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import fusiTheme from './fusiTheme'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

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
              <NavLink exact to='/'>
                <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
              </NavLink>

              <NavLink to='/logos'>
                <MenuItem onTouchTap={this.handleClose}>Logos</MenuItem>
              </NavLink>

              <NavLink to='/posters'>
                <MenuItem onTouchTap={this.handleClose}>Posters</MenuItem>
              </NavLink>

              <NavLink to='/letterhead'>
                <MenuItem onTouchTap={this.handleClose}>Letterhead</MenuItem>
              </NavLink>

              <NavLink to='/share-a-story'>
                <MenuItem onTouchTap={this.handleClose}>Share a Story</MenuItem>
              </NavLink>

              <NavLink to='/service-request'>
                <MenuItem onTouchTap={this.handleClose}>
                  Service Request
                </MenuItem>
              </NavLink>

              <NavLink to='/tutorial'>
                <MenuItem onTouchTap={this.handleClose}>Tutorial</MenuItem>
              </NavLink>
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
