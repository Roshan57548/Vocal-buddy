import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../../context/Context";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import swal from "sweetalert";
const Cart = () => {
  const History = useNavigate();
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.Prize) * curr.qty, 0)
    );
  }, [cart]);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const validate = yup.object({
    name: yup.string().min(2).required(),
    email: yup.string().email().required(),
    phone: yup.string().phone().required(),
    address: yup.string().min(2).required()
  });

  const user = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: ""
    },
    validationSchema: validate,
    onSubmit:async (values) => {
      // console.log(cart)
      // const { name, phone, date } = cart;
      const username = values.name;
      const useremail = values.email;
      const userphone = values.phone;
      const useraddress = values.address;
      cart.map(async (datas)=>{
        const heading = datas.heading;
        const ProductName = datas.ProductName;
        const Category = datas.Category;
        const Prize = datas.Prize;
        const quantity = datas.qty;
        const total = Number(datas.Prize)*Number(datas.qty);
        const res =  await fetch("https://sheet.best/api/sheets/b8a336e2-f7ed-4da8-a583-5ab0c124f505", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            useremail,
            userphone,
            useraddress,
            ProductName,
            Prize,
            Category,
            heading,
            quantity,
            total
          }),
        });
  
        const data = await res.json();
        if (res.status === 421 || !data) {
          swal("Error", "All field are required", "warning");
        }  else {
          swal("Product Booked Successfully", "We will connect with you soon.", "success").then(
            (value) => {
              window.location.reload(false)
              History("/");
            }
          );
        }

      })
      
    }
  });
  return (
    <div className="cart-page">
      <div className="productContainer">
        <ListGroup >
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id} className="cart-item">
              <Row>
                <Col md={2}>
                  <Image src={prod.img} alt={prod.ProductName} fluid rounded />
                </Col>
                <Col md={4}>
                  <span>{prod.ProductName}</span>
                </Col>
                <Col md={2}>₹ {prod.Prize}</Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button variant="secondary" type="button" disabled={cart.length === 0} onClick={handleClickOpen}>
          Proceed to Checkout
        </Button>
        <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
              onSubmit={user.handleSubmit}
            >
              <DialogTitle id="responsive-dialog-title">
                <h3 className="textaligncenter">Book Items</h3>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="dalogbox">
                  <div className="signup-form">
                    <form
                      className="register-form"
                      id="register-form"
                      onSubmit={user.handleSubmit}
                    >
                      {/* name */}
                      <div className="form-group mb-2">
                        <label htmlFor="name">
                          <i className="zmdi zmdi-account material-icons-name setcolor"></i>
                        </label>
                        <input
                          style={{ color: "black" }}
                          type="text"
                          name="name"
                          autoComplete="off"
                          placeholder="Enter Name"
                          className="roshani setcolor"
                          value={user.values.name}
                          onChange={user.handleChange}
                        />
                        {user.touched.name && user.errors.name && (
                          <p className="error-part">
                            {user.errors.name}
                          </p>
                        )}
                      </div>
                      {/* email */}
                      <div className="form-group mb-2">
                        <label htmlFor="email">
                          <i className="zmdi zmdi-email material-icons-name setcolor"></i>
                        </label>
                        <input
                          style={{ color: "black" }}
                          type="email"
                          name="email"
                          autoComplete="off"
                          placeholder="Enter Email"
                          className="roshani"
                          value={user.values.email}
                          onChange={user.handleChange}
                          
                        />
                        {user.touched.email && user.errors.email && (
                          <p className="error-part">
                            {user.errors.email}
                          </p>
                        )}
                      </div>

                      {/* phone */}
                      <div className="form-group mb-2">
                        <label htmlFor="phone">
                          <i className="zmdi zmdi-phone-in-talk material-icons-name setcolor"></i>
                        </label>
                        <input
                          style={{ color: "black" }}
                          type="text"
                          name="phone"
                          autoComplete="off"
                          placeholder="Phone No."
                          className="roshani"
                          value={user.values.phone}
                          onChange={user.handleChange}
                        />
                        {user.touched.phone && user.errors.phone && (
                          <p className="error-part">
                            {user.errors.phone}
                          </p>
                        )}
                      </div>

                      {/* user address */}
                      <div className="form-group mb-2">
                        <label htmlFor="address">
                          <i className="zmdi zmdi-email material-icons-name setcolor"></i>
                        </label>
                        <input
                          style={{ color: "black" }}
                          type="text"
                          name="address"
                          autoComplete="off"
                          placeholder="Address"
                          className="roshani setcolor"
                          value={user.values.address}
                          onChange={user.handleChange}
                        />
                        {user.touched.address && user.errors.address && (
                          <p className="error-part">
                            {user.errors.address}
                          </p>
                        )}
                      </div>

                      
                      <div className="form-group form-button">
                        <Button
                          type="submit"
                          variant="success"
                          autoFocus
                          style={{ marginTop: "15px" }}
                        >
                          Submit
                        </Button>
                        <Button
                          onClick={handleClose}
                          variant="danger"
                          autoFocus
                          style={{
                            marginLeft: "15px",
                            marginTop: "15px",
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </div>
                </DialogContentText>
              </DialogContent>
            </Dialog>
      </div>
    </div>
  );
};

export default Cart;
