import React, { useEffect, useState } from "react"
import Structure from "../../components/structure/structure"
import "./home.css"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://api.captechvn.com/shopee")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  return (
    <div>
      <Structure>
        <div className="container pt-5">
          <div className="row pt-5">
            {products.map((product) => (
              <div className="col-3 pt-5" key={product.product_id}>
                <div className="home-product card bg-light border-0 h-15">
                  <a className="home-product-item" href={product.short_url}>
                    <div
                      className="home-product-item__img"
                      style={{
                        backgroundImage: `url(${product.image})`,
                      }}
                    />
                    <h4 className="home-product-item__name">{product.name}</h4>
                    <div className="home-product-item__price">
                      <span className="home-product-item__price-current">
                        {product.price}
                      </span>
                      <span className="home-product-item__price-discount">
                        {product.raw_discount}% OFF
                      </span>
                      <span className="home-product-item__location">
                        {product.shop_location}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Structure>
    </div>
  )
}

export default Home
