import {createDrawerNavigator} from 'react-navigation-drawer'
import{NavigationContainer} from '@react-navigation/native'
import AboutStack from './aboutStack'
import HomeStack from './homeStack'


const Drawer = createDrawerNavigator();

function aboutDrawer()
{
    return (
        <Drawer.Navigator>
          <Drawer.Screen
          name="Home"
          component={HomeStack}
          />
          <Drawer.Screen
          name="About"
          component={AboutStack}
          />
        </Drawer.Navigator>
    );
}

export default aboutDrawer;
