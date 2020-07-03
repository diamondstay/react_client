import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function FormTemplate(props) {

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data, e) => {
    let firstName = data.firstName,
        lastName = data.lastName,
        email = data.email,
        password = data.password;

    props.onSubmit({firstName, lastName, email, password});
    e.target.reset(); // reset after form submit
  };

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <section id="auth-form">
      <h2 className="page-title mb-3">Đăng ký thành viên</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formFirstName">
          <Form.Label>Tên</Form.Label>
          <Form.Control type="text" name="firstName" placeholder=""
                        ref={register({
                          required: "Vui lòng nhập"
                        })} />
          {errors.firstName && <p className="error">{errors.firstName.message}</p>}
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label>Họ và tên đệm</Form.Label>
          <Form.Control type="text" name="lastName" placeholder=""
                        ref={register({
                          required: "Vui lòng nhập"
                        })} />
          {errors.lastName && <p className="error">{errors.lastName.message}</p>}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Địa chỉ email</Form.Label>
          <Form.Control type="email" name="email" placeholder=""
                        ref={register({
                          required: "Vui lòng nhập",
                          pattern: {
                            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Địa chỉ email sai"
                          }
                        })} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" name="password" placeholder=""
                        ref={register({
                          required: "Vui lòng nhập",
                          pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                            message: "Mật khẩu tối thiểu 6 ký tự, gồm chữ và số."
                          }
                        })} />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Nhập lại mật khẩu</Form.Label>
          <Form.Control type="password" name="rePassword" placeholder=""
                        ref={register({
                          validate: value =>
                            value === password.current || "Mật khẩu nhập lại không chính xác"
                        })} />
          {errors.rePassword && <p className="error">{errors.rePassword.message}</p>}
        </Form.Group>

        <div className="form-submit">
          <button className="btn submit-button" type="submit">Đăng ký</button>
        </div>
      </Form>
      <div className="form-note">
        <p>Bạn đã có tài khoản Diadmond Stay? <br /> <Link to={'/login'}>Đăng nhập</Link></p>
      </div>
    </section>
  );
}

export default FormTemplate;
