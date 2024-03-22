const HEX = 'HEX';
const RGB = 'RGB';

function checkColorFormat(color) {
  return /^#[0-9A-F]{6}[0-9a-f]{0,2}$/i.test(color) ? HEX : RGB;
}

function stringToHex(component) {
  var hex = component.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        'rgb(',
        parseInt(result[1], 16),
        ',',
        parseInt(result[2], 16),
        ',',
        parseInt(result[3], 16),
        ')',
      ].join('')
    : null;
}

function stringToRGB(stringColor) {
  var matches = /rgb\((\d+),(\d+),(\d+)\)/.exec(stringColor);
  return matches
    ? {
        r: parseInt(matches[1]),
        g: parseInt(matches[2]),
        b: parseInt(matches[3]),
      }
    : null;
}

function rgbToHex(input) {
  const rgb = stringToRGB(input);
  return '#' + stringToHex(rgb?.r) + stringToHex(rgb?.g) + stringToHex(rgb?.b);
}

function convertColor(input) {
  const colorType = checkColorFormat(input);
  switch (colorType) {
    case HEX:
      return hexToRgb(input);
    case RGB:
      return rgbToHex(input);
    default:
      'error. The requested color type is not supported by this converter.';
      break;
  }
}

module.exports = convertColor;
