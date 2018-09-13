/**
 * convert input value to string with px unit
 * if given value is string, it will return the input immediately
 *
 * @param   {number|string} value
 * @return  {string}
 */
export function parsePixel(value) {
  if (typeof value === 'string') return value
  return `${value}px`
}

/**
 * parse value with defaultValue and using parsePixel as default parser.
 *
 * Why?
 * If you want a style to have default value when the value isn't sent in
 * you'd write a code like this:
 *
 * margin: ${props => parsePixel(props.margin || defaultMargin)};
 *
 * But what if you want no margin at all? <Component margin={0} />
 * it will render using defaultMargin because 0 is falsy
 * and you'd have to re-write the code like this:
 *
 * margin: ${props => parsePixel(props.margin > -1 ? props.margin : defaultMargin)};
 *
 * pretty long and looks complicated.
 * thus, this function is born and we will be writing like this:
 *
 * margin: ${props => parseWithDefault(props.margin, defaultMargin)}
 *
 * better?
 *
 * @param   {number|string} value
 * @param   {number|string} defaultValue
 * @param   {Function} [parser=parsePixel] - value parser
 * @return  {string|*} - return whatever parser returned or the value if it's a string
 */
export function parseWithDefault(value, defaultValue, parser = parsePixel) {
  if (typeof value === 'string') return value
  return parser(value > -1 ? value : defaultValue)
}
