import React, { useState, useEffect } from "react"

const SearchBar = () => {
  const [query, setQuery] = useState("")
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (query.length > 2) {
      fetch(`https://api.captechvn.com/shopee?name=${query}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          return response.json()
        })
        .then((data) => {
          setProducts(data)
        })
        .catch((error) => {
          console.error("Error fetching data:", error)
        })
    } else {
      setProducts([]) // Clear results when query is too short
    }
  }, [query])

  return (
    <div>
      <input
        type="text"
        placeholder="Search for products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
