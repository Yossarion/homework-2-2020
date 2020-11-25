function addTokens(input, tokens){
    if(typeof input !== "string") {
    throw new Error ('Invalid input')}
    //According to the TODO-EN.md file the error should be 'Input should be a string' but the test checks for 'Invalid input'
    if(input.length < 6) {
    throw new Error ('Input should have at least 6 characters')
    }
    for (let i = 0; i < tokens.length ; i++){
        if (typeof tokens[i].tokenName !== "string")
            throw new Error ('Invalid array format')
    }

    for (let i = 0; i < tokens.length ; i++){
        input = input.replace(`...`, '${'+tokens[i].tokenName+'}')
       
    }  
    //I find it strange that the dots should be replaced with the token name + the dollar sign and the parenthesis, but did it anywas
    
    return input

}

const app = {
    addTokens: addTokens
}

module.exports = app;