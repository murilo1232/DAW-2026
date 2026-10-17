export function Header() {
    return (
        <header>
        <div className="container">
          <div className="brand">
            <img src="../assets/img/logo_lanchonete.svg" alt="Logo da Lanchonete" />
            <div>
              <h1>Cardápio Digital</h1>
              <p>Faça o seu pedido pelo nosso cardápio digital</p>
            </div>
          </div>
          <div className="cart-button">
            <img src="../assets/img/cart.svg" alt="Carrinho de compras" />
          </div>
        </div>
      </header>
    );
}

