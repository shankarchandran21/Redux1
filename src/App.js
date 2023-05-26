import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Cards from "./Components/Cards";
import CardsItem from "./Components/CardsItem";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";
import { calculateTotal, getCartItems } from "./features/Features";
import Mode from "./Components/Mode";

function App() {
  //useSelector is used form take data in store file .it's bulid in redux
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems("randomvaluepass or anything"));
  }, []);

  if (isLoading) {
    return <h1>LOADING!!!!!!!!!!!!!</h1>;
  }

  return (
    <div className="App">
      {isOpen && <Mode />}
      <Navbar />
      <Cards />
    </div>
  );
}

export default App;
