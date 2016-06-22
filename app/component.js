module.exports = function () {
  var element = document.createElement('h1')

  element.innerHTML = 'Hello, world!'

  // Attach the generated class name
  element.className = 'pure-button'

  return element
}
