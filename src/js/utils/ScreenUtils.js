import {Dimensions,PixelRatio} from 'react-native';
export var screenW = Dimensions.get('window').width;
export var screenH = Dimensions.get('window').height;
export  var screenM = Dimensions.get('window').scale;
var fontScale = PixelRatio.getFontScale();
export var pixelRatio = PixelRatio.get();
var mm=PixelRatio.getPixelSizeForLayoutSize(100)

alert(screenW+' '+screenH+' '+screenM+" "+pixelRatio+' '+fontScale+' '+mm)