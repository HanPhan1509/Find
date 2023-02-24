import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

//Guideline sizes are based on standard iPhone 11
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const scale = size => (width / guidelineBaseWidth) * size;
const scaleHeight = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {scale, scaleHeight, moderateScale};
