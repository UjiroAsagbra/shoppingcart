import {Button, Container, Nav, Navbar as Navbarbs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar(){
  const {openCart, cartQuantity} = useShoppingCart()

  return (
  <Navbarbs sticky="top" className="bg-white shadow-sm mb-3">
    <Container>
      <Nav className="me-auto">
        <Nav.Link to='/' as ={NavLink}>Home</Nav.Link>
        <Nav.Link to='/store' as ={NavLink}>Store</Nav.Link>
        <Nav.Link to='/about' as ={NavLink}>About</Nav.Link>
      </Nav>
      {cartQuantity > 0 && (
      <Button
      onClick={openCart}
      style={{position:"relative"}}
      variant="outline-primary"
      className="rounded-circle"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg>
      <div 
        className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
        style={{
          color: "white", 
          width: "1.5rem",
          height: "1.5rem", 
          position:"absolute", 
          bottom:"0", 
          right:"0", 
          transform:"translate(25%,25%"
          }}>
        
        {cartQuantity}
      </div>

      </Button>
      )}
    </Container>
  </Navbarbs>
  )
}