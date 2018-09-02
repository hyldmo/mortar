export const EDIT_RECIPE_NAME = 'EDIT_RECIPE_NAME';
export const editRecipeName = (name) => {
    return {
        type: EDIT_RECIPE_NAME,
        name
    }
};

export const EDIT_DIRECTIONS = 'EDIT_DIRECTIONS';
export const editDirections = (directions) => {
    return {
        type: EDIT_DIRECTIONS,
        directions
    }
};

export const EDIT_TIPS = 'EDIT_TIPS';
export const editTips = (tips) => {
    return {
        type: EDIT_TIPS,
        tips
    }
};