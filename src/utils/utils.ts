export function randomItemFromArray(array: Array<any>) {
    return array[Math.floor(Math.random()*array.length)];
}

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}