import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Platform } from 'react-native';

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('app-root') || document.getElementById('root');
    AppRegistry.runApplication(appName, { initialProps: {}, rootTag });
}
