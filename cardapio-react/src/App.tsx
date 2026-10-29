import { useState } from "react";
import { Footer } from "./components/layout/footer";
import {Header} from "./components/layout/header";
import { Nav } from "./components/layout/nav";
import { categories } from  "./date/categories";
import { useProducts } from "./cases/products/hooks/use-products";
import { ProductCard } from "./cases/products/components/product-card";
function App() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const products = useProducts();
  function handleSelectCategory(alias: string) {
    setActiveCategory(alias);
  }
  return (
    <>
     <Header />

      <Nav categories={categories} activeCategory={activeCategory} onselectCategory={handleSelectCategory}  /> 

      <main>
        <section>
          <header>
            <h2>Produtos</h2>
            <p>Categoria <span id="selected-category">{activeCategory}</span> - 10 itens</p>
          </header>
          
        {products.map((product) => (
           <ProductCard product={product} />
        ))}

       
          
        </section>

        <aside>
          <h2>Seu Pedido</h2>
          <div className="cart-empty">
            <img src="./assets/img/cart.svg" alt="Carrinho vazio" />
            <p>Seu carrinho está vazio</p>
            <p>Escolha um item do cardápio para começar.</p>
          </div>
        </aside>
      </main>
      <Footer />
      
    </>
  )
}

export default App