import data from './data/events2';
import './App.css';

function App() {
  return (
    <main>
      <h2>{data[0].category}</h2>
      <div>
        <div>Prev</div>
        <article>
          <div>
            <img src="" alt=""/>
          </div>
          <div>
            <h3>Event Title</h3><span>close</span>
          </div>
          <div>
            <p>Event description</p>
          </div>
        </article>
        <article>
          <div>
            <img src="" alt=""/>
          </div>
          <div>
            <h3>Event Title</h3><span>close</span>
          </div>
          <div>
            <p>Event description</p>
          </div>
        </article>
        <div>Next</div>
      </div>
    </main>
  );
}

export default App;
