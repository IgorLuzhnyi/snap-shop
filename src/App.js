import CategoriesContainer from "./components/categories-container/categories-container";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1619385746610-e11b2ea6fc1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGhhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://images.unsplash.com/photo-1615332859295-aa9dc9f01fbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://images.unsplash.com/photo-1508908324153-d1a219719814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return <CategoriesContainer categories={categories} />;
};

export default App;
