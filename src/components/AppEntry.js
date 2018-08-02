import { KeepAwake, registerRootComponent } from 'expo';
import App from './App';
/*eslint-disable */
if (__DEV__) {


  KeepAwake.activate();
}
console.disableYellowBox = true;
registerRootComponent(App);
