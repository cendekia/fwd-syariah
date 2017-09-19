import { Dimensions } from 'react-native';
import { Constants } from 'expo';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const STATUS_BAR_HEIGHT = Constants.statusBarHeight;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  STATUS_BAR_HEIGHT
};
