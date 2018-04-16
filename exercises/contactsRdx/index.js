const redux = require ("redux");

//create initial state
    //empty array
//add new object to array of objects
    //put case in reducer to add contact object,
    //make function to add contact
//remove object from array of objects
    //put case in reducer to remove contact object,
    //make function to remove contact

const initialState = {
    contacts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_CONTACT":
            return {
                contacts: [...state.contacts, action.contact]
            }
        case "REMOVE CONTACT":
            return {
                contacts: state.contacts.filter(contact => contact.name !== action.name)
            }
        default:
            return state;
    }
}

const store =redux.createStore(reducer);
store.subscribe(()=> console.log(store.getState()));

const addContact = (contact) => {
    store.dispatch({
        type: "ADD_CONTACT",
        contact
    });
}

const removeContact = name => {
    store.dispatch({
        type: "REMOVE CONTACT",
        name
    })
}
addContact({
    name: "Tommy Oliver",
    phone: "925-867-5309",
    email: "thegreenranger@powerrangers.com"
})

addContact({
    name: "Jim",
    phone: "555-867-5309",
    email: "jim@jim.net"
})

// removeContact("Jim");
