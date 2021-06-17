import React, {useState, useEffect} from "react"
import shortid from "shortid";
import PhonebookForm from "./PhonebookForm";
import PhonebookList from "./PhonebookList"
import filterContacts from "../../helpers/filterContacts"
import PhonebookFilter from "./PhonebookFilter"

const initialState = {
    name: "",
    number: "",
    filter: "",
    contacts: [],
};
  
function Phonebook() {
  
  const [state, setState] = useState(initialState)
  // useEffect(() => {
  //   setState((prev) => ({
  //     ...prev,
  //     contacts: localStorage.getItem("contacts")
  //   }))
  // }, [state.contacts])
  const reset = () => {
    setState((prev)=> ({ ...prev, name: "", number: "" }));
  };

   const handleAddContact = (e) => {
     e.preventDefault();
     const { name, number } = state;
     const contact =  { name, number, id: shortid.generate() }
     setState((prev) => ({
       ...prev,
       contacts: [...prev.contacts, contact],
     }));
     const contacts = JSON.parse(localStorage.getItem("contacts"));
     contacts !== null
       ? localStorage.setItem(
           "contacts",
           JSON.stringify([...contacts, contact])
         )
       : localStorage.setItem(
           "contacts",
           JSON.stringify([contact])
         );
     reset();
   };

  const deleteContacts = (contactIt) => {
    setState((prev) => ({
      ...prev,
      contacts: prev.contacts.filter(
        (contact) => contact.id !== contactIt
      ),
    }));
  };

  const handleChangeName = (name) => {
    setState((prev)=>({...prev, name }));
  };

  const handleChangeNumber = (number) => {
    setState((prev)=>({...prev, number }));
  };

  const handleChangeFilter = ({ target: { name, value } }) => {
    setState((prev)=>({...prev, [name]: value }));
  };

    const filteredContacts = filterContacts(
      state.contacts,
      state.filter
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <PhonebookForm
          onAddContact={handleAddContact}
          onChangeNumber={handleChangeNumber}
          onChangeName={handleChangeName}
          name={state.name}
          number={state.number}
        />
        <PhonebookFilter
          filterName={state.filter}
          onChangeFilter={handleChangeFilter}
        />
        <PhonebookList
          onDeleteContacts={deleteContacts}
          contacts={filteredContacts}
        />
      </div>
    );
}

export default Phonebook