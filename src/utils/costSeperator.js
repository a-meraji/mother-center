function costSeperator(number){
    return number.toString()
    .split("")
    .reverse()
    .join("")
    .replace(/(.{3})/g, "$1,")
    .replace(/\,$/, "")
    .split("")
    .reverse()
    .join("")
}

export default costSeperator