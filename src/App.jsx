import React from 'react'
import './App.css'
// import Header from './shared/Component/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './shared/Component/home'
import Quote from './shared/Component/Quote'
import Footer from './shared/Component/footer'
import Blog from './shared/Component/Blogs/blogs'

function App () {
  return (
    <div className="App">
      {/* <Header className='header' /> */}
      <Home/>
      <Quote/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
