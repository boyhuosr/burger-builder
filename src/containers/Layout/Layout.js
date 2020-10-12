import React, {Component} from 'react';
import Auu from '../../hoc/Auu';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state={
        showSideDrawer: true
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((preState) => {
            return {showSideDrawer: !preState.showSideDrawer}
        })
    }

    render(){
        return (
            <Auu>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                <div>Toolbar, SideDrawer, Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auu>
        )
    }

} 

export default Layout;