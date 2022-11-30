import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "../screens/HomeScreen"
import { UserSettingsScreen } from "../screens/UserSettingsScreen"
import { Icon } from "@rneui/themed"

const Tab = createBottomTabNavigator()

export function AppNavigation() {
    return (
        <Tab.Navigator 
            screenOptions={({route}) => ({
                tabBarActiveTintColor: "#00a680",
                tabBarInactiveTintColor: "#646464",
                tabBarIcon: ({color,size}) => screenTabOptions(route,color,size),
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Account" component={UserSettingsScreen} />
        </Tab.Navigator>
    )
}

function screenTabOptions (route, color, size) {
    let iconName

    if(!route || !route.name){
        iconName = "build"
    }
    console.log("route.name:" + route.name)
    switch (route.name) {
        case "Home":{
            iconName = "home"
            break;
        }
        case "Account":{
            iconName = "account-circle"
            break;
        }
        default: {
            iconName = "build"
        }
    }

    return <Icon 
        type="material" 
        name={iconName} 
        color={color} 
        size={size}
    />
} 