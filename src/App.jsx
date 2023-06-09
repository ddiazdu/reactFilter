import './assets/App.css'
import SearchBar from './components/SearchBar'
import BooksData from './data.json'

const App = () => {

  return (
    <div className="App">
      <SearchBar 
      placeholder="Ingrese un Titulo"
      data={BooksData}
      />
    </div>
  )
}

export default App
