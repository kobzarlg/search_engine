function submit() {
  const string = document.getElementsByClassName('input-search')[0].value,
        engine = document.getElementsByClassName('input-engine')[0].value,
        errorContainer = document.getElementsByClassName('block-error')[0]
  let requestUrl, errorArray = []

  // check if search string contain at least 1 character excepts whitespace characters
  if ( !string.replace(/\s/gi,'') ) errorArray.push('Введите валидные данные для поиска')
  
  // assemble url
  switch (engine) {
    case 'google':
      requestUrl = 'https://www.google.com/search?q='+string
      break;
    case 'bing':
      requestUrl = 'https://www.bing.com/search?q='+string
      break;
    case 'ask':
      requestUrl = 'https://www.ask.com/web?q='+string
      break;
    default:
      errorArray.push('Выберите поисковую систему')
  }

  // erase error container
  errorContainer.innerHTML = ''
  // if errorArray is not empty
  if (errorArray.length) {
    for (var i = 0; i < errorArray.length; i++) {
      let paragraph = document.createElement('span'),
          text = document.createTextNode(errorArray[i])
      paragraph.className = 'error__item'
      paragraph.appendChild(text)
      errorContainer.appendChild(paragraph)
    }
    return false
  }
  // redirect to search engine page
  window.location.href = requestUrl
}
