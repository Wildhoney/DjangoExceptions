import m from 'moggy';

/**
 * @method parse
 * @param {Object} input
 * @param {Array} group
 * @return {Array} 
 */
export const parse = (input, group = []) => {

    return Object.keys(input).reduce((xs, key) => {

        const isGroup = typeof input[key] === 'object' && !Array.isArray(input[key]);
        const model = { field: group.concat(key), messages: input[key] };

        return isGroup ? xs.concat(parse({ ...input[key] }, group.concat(key))) : [...xs, model];

    }, []);

};