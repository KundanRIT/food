import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ShowRestaurant from "./src/screens/ShowRestaurant";

const navigator = createStackNavigator({
  Search: SearchScreen,
  Restaurant: ShowRestaurant
}, {
  initialRouteName: "Search",
  defaultNavigationOptions: {
    title: "Business Search"
  }
});

export default createAppContainer(navigator);