import React from "react"
import Header from "./Header.jsx"
import Place from "./Place.jsx"
import Footer from "./Footer.jsx"
import data from "./data.jsx"

export default function App() {
  const places = data.map((place) => {
    return <Place place={place} />
  })

  return (
    <div>
      <Header />
      <section>{places}</section>
      <Footer />
    </div>
  )
}
