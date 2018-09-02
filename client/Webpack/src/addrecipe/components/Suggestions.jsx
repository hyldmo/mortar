import React, { PropTypes } from 'react'
import Highlight from './Highlight'

const Suggestions = ({ term, suggestions, onSuggestionClick }) => (
    <div className="list-group list-group-dropdown">
        {suggestions.map(suggestion =>
            <button onClick={e => onSuggestionClick(suggestion)} className="list-group-item" key={suggestion}><Highlight text={suggestion} term={term}/></button>
        )}
    </div>
);

export default Suggestions