import './App.css';
import Card from "./components/Card";

import contents from "./content";

function App() {
  return (
    <div id='app'>
      <main>
        {contents.map((content) => {
          return <Card key={content.id}
            img={content.img} 
            alt={content.carType}
            carType={content.carType}
            description={content.description}
            class={content.class}
          />
        })}
      </main>
    </div>
  );
}

export default App;
