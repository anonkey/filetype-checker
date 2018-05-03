module.exports = function(file) {

  const uint = new Uint8Array(file)
  let bytes = []
  uint.forEach((byte) => {
    bytes.push(byte.toString(16))
  })
  const hex = bytes.join('').toUpperCase()
  getMimetype(hex)
}

const getMimetype = (signature) => {
  switch (signature) {
    case '89504E47':
      return 'image/png'
    case '47494638':
      return 'image/gif'
    case '25504446':
      return 'application/pdf'
    case 'FFD8FFDB':
    case 'FFD8FFE0':
      return 'image/jpeg'
    case '504B0304':
      return 'application/zip'
    default:
      return 'Unknown filetype'
  }
}
