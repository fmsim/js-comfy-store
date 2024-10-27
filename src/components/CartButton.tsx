import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

function CartButton() {
  const numItemsInCart = 5;

  return (
    <Button
      asChild
      variant="outline"
      className="flex justify-content items-center relative"
    >
      <Link to="/cart">
        <ShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-xs text-white rounded-full w-6 h-6 flex justify-center items-center">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
