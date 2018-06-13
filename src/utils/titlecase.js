/**
 * Utility function to title case a sentence.
 *
 * @param string
 * @returns {string}
 */

export default string =>
  string.split('_').map(word =>
    word.replace(/^./, c => c.toUpperCase())
  ).join(' ');