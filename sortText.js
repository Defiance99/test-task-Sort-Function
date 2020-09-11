function sortText(text) {
    let elements = text.split(' ');
    
    let transformedElements = elements.map( element => {
        return element.split('').sort().join('');
    });

    return transformedElements.join(' ');
}

module.exports.sortText = sortText;
