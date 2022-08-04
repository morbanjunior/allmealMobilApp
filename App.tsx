
import RootDrawer from './src/navigators/RootDrawer'
import AppLoading from "expo-app-loading"
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/redux/store';
export default function App() {

  // let [fontsLoaded] = useFonts({
  //   "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
  //   "Poppins-BlackItalic": require("./assets/fonts/Poppins-BlackItalic.ttf"),
  //   "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  //   "Poppins-BoldItalic": require("./assets/fonts/Poppins-BoldItalic.ttf"),
  //   "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
  //   "Poppins-Light": require("./assets/fonts/Poppins-ExtraLight.ttf"),
  //   "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
  //   "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
  //   "Poppins-LightItalic": require("./assets/fonts/Poppins-LightItalic.ttf"),
  //   "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
  //   "Poppins-MediumItalic": require("./assets/fonts/Poppins-MediumItalic.ttf"),
  //   "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  //   "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  //   "Poppins-SemiBoldItalic": require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
  //   "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  //   "Poppins-ThinItalic": require("./assets/fonts/Poppins-ThinItalic.ttf"),
  // })

  // if(!fontsLoaded){
  //   return <AppLoading/>
  // }

  return (
    <Provider store={store}>
      <RootDrawer/>
    </Provider>
    
  );
}

