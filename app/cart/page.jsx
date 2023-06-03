import { age, name, Greeting } from "./data.js";
// export {}를 쓴다면 작명x 변수명 그대로 쓰기

export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
      <Banner content="롯데카드" />
      <Banner content="현대카드" />
    </div>
  );
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}

// 이부분에서 오류가 너무 오래 해결되지 않아 js로 변신..
function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
