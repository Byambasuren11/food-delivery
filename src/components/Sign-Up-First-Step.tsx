"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const FirstStep = (props: { setStep: Dispatch<SetStateAction<number>> }) => {
  const { setStep } = props;
  setStep(1);
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        setStep(2);
        console.log(values);
      }}
    >
      {({ errors }) => (
        <Form className="w-2/5 h-1/3 flex flex-col gap-6">
          <div>
            <h3 className="text-black text-lg">Create your account</h3>
            <p>Sign up to explore your favorite dishes</p>
          </div>
          <div>
            <Field
              placeholder="Enter your email address"
              name="email"
              className="border rounded-xl p-2 w-full"
            />
            {errors.email ? (
              <div className="text-red-500">{errors.email}</div>
            ) : (
              <></>
            )}
          </div>
          <Button className="bg-gray-400" type="submit">
            Let's go
          </Button>
          <p className="text-center mt-2">
            Already have an account? <a href="Login">Log in</a>
          </p>
        </Form>
      )}
    </Formik>
  );
};
export default FirstStep;
