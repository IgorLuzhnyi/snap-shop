import {
  NavigationStyle,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styled";
import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import snapLogo from "../../assets/snap.png";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationStyle>
        <LogoContainer to="/">
          <img src={snapLogo} className="logo" alt="snap-logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationStyle>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
