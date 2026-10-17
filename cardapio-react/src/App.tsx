import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"


function App() {
  return (
    <>
      <Header />


      <nav>
        <ul className="container">
          <li><a href="#" className="active">Todos</a></li>
          <li><a href="#">Lanches</a></li>
          <li><a href="#">Porções</a></li>
          <li><a href="#">Bebidas</a></li>
          <li><a href="#">Sobremesas</a></li>
        </ul>
      </nav>

      <main>
        <section>
          <header>
            <h2>Produtos</h2>
            <p>Categoria <span id="selected-category">Todos</span> - 10 itens</p>
          </header>
          <article>
            <figure>
              <img src="../assets/img/burger.png" alt="Burger" />
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Burguer</h3>
            <p>Pão Brioche, hambúrguer 160g, queijo prato e molho da casa.</p>
            <p>R$ 22,00</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="../assets/img/burger-bacon.png" alt="Burger-bacon" />
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Bacon Burger</h3>
            <p>Pão brioche, hambúrguer 160g, bacon, queijo cheddar e molho da casa.</p>
            <p>R$ 25,00</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="../assets/img/burger-double.png" alt="Burger-double" />
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Duplo Burguer</h3>
            <p>Dois hambúrgueres de 160g cada, cheddar, bacon e cebola caramelizada.</p>
            <p>R$ 29,00</p>
            <button type="button">Adicionar</button>
          </article>
          <article>
            <figure>
              <img src="../assets/img/batata-rustica.png" alt="batata-rustica" />
              <figcaption>Porções</figcaption>
            </figure>
            <h3>Batata Rústica</h3>
            <p> Porção de batata com alecrim, parmesão e maionese verde.</p>
            <p>R$ 18,00</p>
            <button type="button">Adicionar</button>
          </article>
          <article>
            <figure>
              <img src="../assets/img/batata-tradicional.png" alt="batata-tradicional" />
              <figcaption>Porções</figcaption>
            </figure>
            <h3> Batata Tradicional</h3>
            <p> Porção de batata e maionese verde.</p>
            <p>R$ 15,00</p>
            <button type="button">Adicionar</button>
          </article>
          <article>
            <figure>
              <img src="../assets/img/agua.png" alt="água sem gás" />
              <figcaption>Bebidas</figcaption>
            </figure>
            <h3> Água Sem Gás</h3>
            <p> Garrafa descartável de água sem gás com 500 ml.</p>
            <p>R$ 8,00</p>
            <button type="button">Adicionar</button>
          </article>
          <article>
            <figure>
              <img src="../assets/img/refri.png" alt="refrigerante" />
              <figcaption>Bebidas</figcaption>
            </figure>
            <h3> Refrigerante 300 ml</h3>
            <p> Copo de refrigerante de 300 ml.</p>
            <p>R$ 10,00</p>
            <button type="button">Adicionar</button>
          </article>
          <article>
            <figure>
              <img src="../assets/img/chopp.png" alt="chopp" />
              <figcaption>Bebidas</figcaption>
            </figure>
            <h3> Chopp 300 ml</h3>
            <p> Copo de chopp de 300 ml.</p>
            <p>R$ 15,00</p>
            <button type="button">Adicionar</button>
          </article>
          <article>
            <figure>
              <img src="../assets/img/petit-gateau.png" alt="petit gateau" />
              <figcaption>Sobremesas</figcaption>
            </figure>
            <h3> Petit Gateau</h3>
            <p> Petit Gateau com uma bola de sorvete de creme.</p>
            <p>R$ 25,00</p>
            <button type="button">Adicionar</button>
          </article>
          <article>
            <figure>
              <img src="../assets/img/mousse-maracuja.png" alt="mousse de maracujá" />
              <figcaption>Sobremesas</figcaption>
            </figure>
            <h3> Mousse de Maracujá</h3>
            <p> Mousse de maracujá feito com a fruta de verdade.</p>
            <p>R$ 18,00</p>
            <button type="button">Adicionar</button>
          </article>
        </section>

        <aside>
          <h2>Seu Pedido</h2>
          <div className="cart-empty">
            <img src="../assets/img/cart.svg" alt="Carrinho vazio" />
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
