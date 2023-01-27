import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";
import photo1 from './ProductImage/1.jpeg';
import photo2 from './ProductImage/2.jpeg';
import photo3 from './ProductImage/3.jpeg';
import photo4 from './ProductImage/4.jpeg';
import photo5 from './ProductImage/5.jpeg';
import photo6 from './ProductImage/6.jpeg';
import photo7 from './ProductImage/7.jpeg';
import photo8 from './ProductImage/8.jpeg';
import photo9 from './ProductImage/9.jpeg';
import photo10 from './ProductImage/10.jpeg';
import photo11 from './ProductImage/11.jpeg';
import photo12 from './ProductImage/12.jpeg';
import photo13 from './ProductImage/13.jpeg';
import photo14 from './ProductImage/14.jpeg';
const Cart = createContext();
const TopSpecialist = [
  {
      heading: "Basket",
      ProductName: "Laundary basket/box 1150/-, Trunk 1550/-. This two used for mutiple utility.",
      Category: "All",
      img: photo14,
      MaxPrize: "1500-2000",
      Prize: "1150-1550",
      Available: "Yes",
  },
  {
      heading: "Table",
      ProductName: "12'' premium quality baby table woven with first class quality nylon plastic rope goes with baby chairs and moodha.",
      Category: "Adults",
      img: photo13,
      MaxPrize: "500",
      Prize: "350",
      Available: "Yes",
  },
  {
    heading: "Chair",
    ProductName: "Big chair class durable moodha for kinds(baby chair) with good quality nylon plastic rope.",
    Category: "Kids Segment",
    img: photo1,
    MaxPrize: "500",
    Prize: "380",
    Available: "Yes",
  },
  {
      heading: "Chair",
      ProductName: "Medium chair class durable moodha for kinds(baby chair) with good quality nylon plastic rope.",
      Category: "Kids Segment",
      img: photo2,
      MaxPrize: "500",
      Prize: "320",
      Available: "Yes",
  },
  {
      heading: "Stools",
      ProductName: "12'' premium sitting stools woven with first class quality nylon plastic rope with tyre base.",
      Category: "Kids Segment",
      img: photo3,
      MaxPrize: "1000",
      Prize: "760",
      Available: "Yes",
  },
  {
      heading: "Stools",
      ProductName: "15'' premium quality customized comfortable sitting stools with cusions and rexine base.",
      Category: "Kids Segment",
      img: photo4,
      MaxPrize: "800",
      Prize: "580",
      Available: "Yes",
  },
  {
      heading: "Stools",
      ProductName: "15'' durable sitting stools with jute and good quality nylon plastic rope.",
      Category: "Kids Segment",
      img: photo5,
      MaxPrize: "600",
      Prize: "480",
      Available: "Yes",
  },
  {
      heading: "Stools",
      ProductName: "16'' premium sitting stools woven with first class quality nylon plastic rope with tyre base.",
      Category: "Kids Segment",
      img: photo6,
      MaxPrize: "900",
      Prize: "660",
      Available: "Yes",
  },
  {
      heading: "Chair",
      ProductName: "Full size moodha chair woven with first class nylon plasic rope.",
      Category: "Adults",
      img: photo7,
      MaxPrize: "1500",
      Prize: "1250",
      Available: "Yes",
  },
  {
      heading: "Stools",
      ProductName: "17'' premium quality sitting stools woven with first class quality nylon plastic rope with tyre base.",
      Category: "Adults",
      img: photo8,
      MaxPrize: "1000",
      Prize: "680",
      Available: "Yes",
  },
  {
      heading: "Chair",
      ProductName: "Small size moodha chair woven with first class nylon plastic rope.",
      Category: "Adults",
      img: photo9,
      MaxPrize: "1000",
      Prize: "850",
      Available: "Yes",
  },
  {
      heading: "Chair",
      ProductName: "Medium size moodha chair woven with first class nylon plastic rope.",
      Category: "Adults",
      img: photo10,
      MaxPrize: "1200",
      Prize: "1050",
      Available: "Yes",
  },
  {
      heading: "Sofa Set",
      ProductName: "Miniature 4 piece sofa set showpiece can be used in poojaghar or showcase",
      Category: "Adults",
      img: photo11,
      MaxPrize: "3000",
      Prize: "2500",
      Available: "Yes",
  },
  {
      heading: "Sofa Set",
      ProductName: "Two seater and center table with iron frame, jute, and nylon plastic rope",
      Category: "Adults",
      img: photo12,
      MaxPrize: "8000",
      Prize: "7800",
      Available: "Yes",
  }
];
const Context = ({ children }) => {
  const products = TopSpecialist.map((data,index) => ({
    id: index,
    heading: data.heading,
    Prize: data.Prize,
    img: data.img,
    ProductName: data.ProductName,
    Category: data.Category,
    Available: data.Available,
    MaxPrize: data.MaxPrize,
    inStock: 1000,
    fastDelivery: true,
    ratings: index+1,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);


  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
