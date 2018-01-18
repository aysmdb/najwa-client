import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from '../screens/login';
import Register from '../screens/register';
import Home from '../screens/home';
import ActiveAkun from '../screens/activeAkun';
import CreateAkun from '../screens/createAkun';
import DetailAkun from '../screens/detailAkun';
import EditAkun from '../screens/editAkun';
import HistoryAkun from '../screens/historyAkun';
import Warga from '../screens/warga';
import Profile from '../screens/profile';
import Setting from '../screens/setting';

const headerStyle = {
    marginTop: StatusBar.currentHeight
}

export const LoginScreen = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            // headerStyle
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Register'
        }
    }
},{
    headerMode: 'none',
});

export class SettingScreenWrapper extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <SettingRoute screenProps={{tes:this.props.navigation,dua:this.props.screenProps}} />
        );
    }
}

export class MainScreenWrapper extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <MainScreen screenProps={this.props.navigation} />
        );
    }
}

export class AkunScreenWrapper extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <AkunScreen screenProps={this.props.navigation} />
        );
    }
}

export class AkunCrudWrapper extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <AkunCrud screenProps={{tes:this.props.navigation,dua:this.props.screenProps}} />
        );
    }
}

const AkunScreen = TabNavigator({
    Active: {
        screen: AkunCrudWrapper,
        navigationOptions: {
            title: 'Aktif',
            // headerStyle
        }
    },
    History: {
        screen: HistoryAkun,
        navigationOptions: {
            title: 'Histori'
        }
    }
},{
    headerMode: 'none',
});

const AkunCrud = StackNavigator(
    {
        AkunIndex: {
            screen: ActiveAkun
        },
        AkunCreate: {
            screen: CreateAkun
        },
        AkunEdit: {
            screen: EditAkun
        },
        AkunDetail: {
            screen: DetailAkun
        },
    },
    {
        headerMode: 'none',
        initialRouteName: 'AkunIndex'
    }
);

const SettingRoute = StackNavigator(
    {
        SettingIndex: {
            screen: Setting
        },
        Profile: {
            screen: Profile
        }
    },
    {
        headerMode: 'none',
        initialRouteName: 'SettingIndex'
    }
);

const MainScreen = DrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: () => (
                <Icon name='home' size={20} color='#000' />
            )
        }
    },
    Warga: {
        screen: Warga,
        navigationOptions: {
            drawerLabel: 'Database Warga',
            drawerIcon: () => (
                <Icon name='user' size={20} color='#000' />
            )
        }
    },
    Akun: {
        screen: AkunScreenWrapper,
        navigationOptions: {
            drawerLabel: 'Akun',
            drawerIcon: () => (
                <Icon name='file' size={20} color='#000' />
            )
        }
    },
    Setting: {
        screen: SettingScreenWrapper,
        navigationOptions: {
            drawerLabel: 'Setting',
            drawerIcon: () => (
                <Icon name='cog' size={20} color='#000' />
            )
        }
    }
});

export const createRootNavigator = (signedIn) => {
    return StackNavigator(
        {
            Main: {
                screen: MainScreenWrapper,
                navigationOptions: {
                    gestureEnabled: false
                }
            },
            Login: {
                screen: LoginScreen,
                navigationOptions: {
                    gestureEnabled: false
                }
            }
        },
        {
            headerMode: 'none',
            mode: 'modal',
            initialRouteName: signedIn ? 'Main' : 'Login'
        }
    );
} 