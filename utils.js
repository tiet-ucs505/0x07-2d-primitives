// ----------------------------------------------------
// Colour Functions
// ----------------------------------------------------
function rgbToHex(c, {prefix='#', norm=true}={}) {
  // Clone and resolve maybe
  c = (norm) ? c.map(x=>x*255) : [...c]

  // Endianness check
  c.unshift(0)
  c.reverse()

  // Reinterpret as Uint32 and Hex-serialise
  const hex = [
    ...new Uint32Array(
      new Uint8ClampedArray(c).buffer
    ).values()
  ].at(0).toString(16)

  return `${prefix}${hex}`
}

function hexToRgb(s, {prefix='#', norm=false}={}) {
  let c
  if (s.at(0) == prefix) { s = s.slice(1) }
  c = [
    ...new Uint8ClampedArray(
    new Uint32Array([parseInt(s, 16)]).buffer
    ).values()
  ].toReversed().slice(1)
  if (norm)
    c = c.map(x=>x/255)
  return c
}


// ----------------------------------------------------
// String Manipulations
// ----------------------------------------------------
function slug(s) {
  return s
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(s=>0<s.length)
    .join('-')
}
