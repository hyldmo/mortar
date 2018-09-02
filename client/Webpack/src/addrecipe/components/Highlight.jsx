import React, { PropTypes } from 'react'

//Based on react-highlight-words by https://github.com/bvaughn

export default function Highlight ({ text, term }) {
    const chunks = highlightSuggestion(text, term);

    return (
        <span>
            {chunks.map(chunk => {
                if (chunk.highlighted)
                    return <strong key={chunk.text}>{chunk.text}</strong>;
                else
                    return chunk.text;
            })}
        </span>
    )
}

class Chunk {
    constructor(text, isHighlighed = false) {
        this.text = text;
        this.highlighted = isHighlighed;
    }
}

function highlightSuggestion(suggestion, term) {
    let terms = term.toLowerCase().split(' ');

    let lastIndex = 0,
        newIndex = 0;

    let chunks = new Array(terms.length);

    for (let i = 0; i < terms.length; i++) {
        newIndex = suggestion.toLowerCase().indexOf(terms[i], lastIndex);
        chunks.push(new Chunk(suggestion.substr(lastIndex, newIndex - lastIndex), false));
        lastIndex = newIndex + terms[i].length;
        chunks.push(new Chunk(suggestion.substr(newIndex, terms[i].length), true));
    }
    chunks.push(new Chunk(suggestion.substr(lastIndex, suggestion.length), false));

    return chunks;
}
