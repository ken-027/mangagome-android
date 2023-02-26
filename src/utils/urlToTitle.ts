const urlToTitle = (url: string): string => {
  const urlStart = 'https://www.mangago.me/read-manga/'

  if (!url.startsWith(urlStart)) {
    return ''
  }
  let title = url
  title = title.replace(urlStart, '')
  title = title.substring(0, title.indexOf('/'))
  title = title.replace(/_/g, ' ')
  return title
}

export default urlToTitle
