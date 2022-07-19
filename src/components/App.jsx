import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contacts) {
  return (
    <Card
    // f
      name={contacts.name}
      img={contacts.img}
      tel={contacts.phone}
      email={contacts.email}
    />
  );
};

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].img}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].img}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
