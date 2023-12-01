import './App.css'
import SideBar from './components/sidebar'
function App() {

  return (
    <>
      <div className="container">
        <div className="navbar">
          <SideBar />
        </div>

        <div className="content">
          <div className="searchbar">
            <h1>search here?</h1>
          </div>
          <div className="item">
            <h1>Hii</h1>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
