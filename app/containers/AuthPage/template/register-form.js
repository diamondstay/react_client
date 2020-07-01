import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function FormTemplate(props) {

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data, e) => {
    let name = data.name,
      email = data.email,
      phone = data.phone;

    props.onSubmit({name, email, phone});
    e.target.reset(); // reset after form submit
  };

  return (
    <section id="auth-form">
      <h2 className="page-title">Đăng ký thành viên</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Name"
                        ref={register({
                          required: "This field is required"
                        })} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email"
                        ref={register({
                          required: "This field is required",
                          pattern: {
                            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid email address"
                          }
                        })} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="phone" placeholder="Phone"
                        ref={register({
                          required: "This field is required",
                          pattern: {
                            value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                            message: "Invalid phone number"
                          }
                        })} />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </Form.Group>

        <div className="form-submit">
          <button className="submit-button" type="submit">Submit</button>
        </div>
      </Form>
    </section>
  );
}

export default FormTemplate;
