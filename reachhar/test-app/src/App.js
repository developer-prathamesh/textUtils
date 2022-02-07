
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'
// import Switch from 'react-router-dom'

function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [redMode, setRedMode] = useState('light');
  const [bluekMode, setBlueMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (darkMode === 'light') {
      setDarkMode('dark')
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
      document.title = 'TextUtils - Dark Mode'
      setInterval(() => {
        document.title = 'TextUtlis is Amazing'
      }, 2000)
      showAlert("dark mode has been enabled", "success")
    } else {
      setDarkMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      document.title = 'TextUtils - Light Mode'
      showAlert("light mode has been enabled", "success")

    }
  }

  const toggleMode1 = () => {
    if (redMode === 'light') {
      setRedMode('red')
      document.body.style.backgroundColor = 'red'
      document.body.style.color = 'white'
      showAlert("red mode has been enabled", "success")
    } else {
      setRedMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'

      showAlert("light mode has been enabled", "success")

    }
  }

  const toggleMode2 = () => {
    if (bluekMode === 'light') {
      setBlueMode('dark')
      document.body.style.backgroundColor = 'blue'
      document.body.style.color = 'white'
      showAlert("blue mode has been enabled", "success")
    } else {
      setBlueMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'

      showAlert("light mode has been enabled", "success")

    }
  }

  return (
    <>
      <Router>
        <NavBar title='TextUtlis' mode={darkMode} mode1={redMode} mode2={bluekMode} toggleMode={toggleMode} toggleMode1={toggleMode1} toggleMode2={toggleMode2}></NavBar>
        <Alert alert={alert}></Alert>
        <div className="container my-4">

          <Switch>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={darkMode}  ></TextForm>
            </Route>
          </Switch>

        </div>
      </Router>
    </>

  );
}

export default App;
