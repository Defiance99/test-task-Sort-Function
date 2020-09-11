function sortText(text) {
    let elements = text.split(' ');
    
    let transformedElement = elements.map( element => {
        return element.split('').sort().join('');
    });

    return transformedElement.join(' ');
}

module.exports.sortText = sortText;
