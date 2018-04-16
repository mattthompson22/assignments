const redux = require ("redux");

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
    name: "Ben",
    phone: "555-555-5555",
    email: "afdads@afdl;sk.com"
})

removeContact("Ben");