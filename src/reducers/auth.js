const { decrement } = require("../actions");

const auth = (state = false, action) => {
    switch(action.type){
        case 'SIGNIN' : 
            return true;
        case 'SIGNOUT' :
            return false;
        default :
            return false
    }
}

export default auth;