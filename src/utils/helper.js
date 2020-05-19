import _sample   from 'lodash.sample'
import hashIndex from 'hash-index'

const defaultColorArr = [
  'Blueviolet',
  'Coral',
  'Cadetblue',
  'Cornflowerblue',
  'Darkseagreen',
  'Darkorchid',
  'Darkcyan',
  'Deeppink',
  'Deepskyblue',
  'Dodgerblue',
  'Goldenrod',
  'Hotpink',
  'indianred',
  'Limegreen',
  'Lightsalmon',
  'Lightseagreen',
  'Mediumaquamarine',
  'Mediumorchid',
  'Mediumpurple',
  'Mediumseagreen',
  'Mediumslateblue',
  'yellowgreen'
]

export const randomColor = colorArr => {
  if (!Array.isArray(colorArr)) {
    return randomColor(defaultColorArr)
  }
  return _sample(defaultColorArr)
}

export const pickColorByName = (name, colorArr) => {
  if (!Array.isArray(colorArr)) {
    return pickColorByName(name, defaultColorArr)
  }
  const index = hashIndex(name, colorArr.length)
    return colorArr[index]
}
