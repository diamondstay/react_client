import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function FormTemplate(props) {

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data, e) => {
    let email = data.email,
        password = data.password;

    props.onSubmit({email, password});
    e.target.reset(); // reset after form submit
  };

  return (
    <section id="auth-form">
      <h2 className="page-title">Đăng nhập</h2>
      <p className="mb-4">Đăng nhập Luxstay để trải nghiệm</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
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
                          required: "Vui lòng nhập"
                        })} />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </Form.Group>

        <div className="form-submit">
          <button className="btn submit-button" type="submit">Đăng nhập</button>
        </div>
      </Form>

      <div className="form-note">
        <p>Quên mật khẩu? <br /> <Link to={'/reset-password'}>Nhấn vào đây</Link></p>
        <p>Bạn chưa có tài khoản Luxstay? <br /> <Link to={'/register'}>Đăng ký</Link></p>
      </div>
    </section>
  );
}

export default FormTemplate;
