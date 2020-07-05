import React, { Component } from 'react';

class Menu extends Component {
  state = {
    menuItems: [
      {
        id: 1,
        name: 'Traditional Meatballs',
        description: 'Veal and Pork, topped with our sauce and Parmesan.',
      },
      {
        id: 2,
        name: 'Scallop Tartare',
        description: 'A medley of scallops, capers, and red onion.',
      },
      {
        id: 3,
        name: 'Caesar Salad',
        description: 'Fresh lettuce, croutons, the works.',
      },
      {
        id: 4,
        name: 'Lobster linguine',
        description: 'Butter poached lobster, tomato sauce, and Parmesan.',
      },
      {
        id: 5,
        name: 'Chicken Parmigiana',
        description:
          'fried chicken smothered with tomato sauce and melted cheese.',
      },
      {
        id: 6,
        name: 'Ratatouille',
        description:
          'Traditional medley of stewed vegetable in our signature sauce.',
      },
      {
        id: 7,
        name: 'Tiramisu',
        description:
          "Lot's of ladyfingers dipped in coffee, Mascarpone and cocoa.",
      },
    ],
  };

  render() {
    return (
      <main>
        {this.state.menuItems.map((items) => (
          <div key={items.id}>
            <h4>{items.name}</h4>
            <p>{items.description}</p>
          </div>
        ))}
      </main>
    );
  }
}

export default Menu;
