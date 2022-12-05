import { useContext } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReactComponent as Crown } from "../../assests/logo.svg";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utilites/firebase/firebase.utilites";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {

  const isCartOpen = useSelector(selectIsCartOpen)
  const CurrentUser = useSelector(selectCurrentUser);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <div className="logo">
            <Crown />
          </div>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {CurrentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out{" "}
            </NavLink>
          ) : (
            <NavLink to="/Authentication">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
