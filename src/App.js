import logo from './logo.svg';
import './App.css';
import MovieSeat from './MovieSeat/MovieSeat';

//Component App sẽ là nơi chứa toàn bộ giao diện của ứng dụng
function App() {

  return (
    <div className="App">
      <MovieSeat />
    </div>
  );
}

export default App;
