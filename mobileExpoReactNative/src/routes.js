import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main.js";
import Profile from "./pages/Profile.js";

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    Profile
  })
);

export default Routes;
