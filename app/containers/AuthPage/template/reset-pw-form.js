import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function FormTemplate(props) {

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data, e) => {
    let email = data.email

    props.onSubmit({email});
    e.target.reset(); // reset after form submit
  };

  return (
    <section id="auth-form">
      <h2 className="page-title">Quên mật khẩu</h2>
      <p className="mb-4">Vui lòng nhập địa chỉ email được liên kết với tài khoản Diamond Stay để nhận liên kết đặt lại mật khẩu</p>
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

        <div className="form-submit">
          <button className="btn submit-button" type="submit">Gửi</button>
        </div>
      </Form>
    </section>
  );
}

export default FormTemplate;
