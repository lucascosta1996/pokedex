export const getQuery = ( url, param ) => {
  if ( url !== null ) {
    return new URL( url ).searchParams.get( param )
  } else {
    return ''
  }
}