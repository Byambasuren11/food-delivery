"use client";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";
import { ChevronLeft } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { useRouter } from "next/navigation";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const PasswordSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

const SecondStep = (props: { setStep: Dispatch<SetStateAction<number>> }) => {
  const { setStep } = props;
  const router = useRouter();
  const previousPage = () => {
    setStep(1);
  };
  return (
    <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
      }}
      validationSchema={PasswordSchema}
      onSubmit={(values) => {
        console.log(values);
        router.push("/Login");
      }}
    >
      {({ errors }) => (
        <Form className="w-2/5 h-1/3 flex flex-col gap-6">
          <div className="border w-fit rounded-8" onClick={previousPage}>
            <ChevronLeft />
          </div>
          <div>
            <h3 className="text-black text-lg">Create a strong password</h3>
            <p>Create a strong password with letters, numbers</p>
          </div>
          <div>
            <Field
              placeholder="Password"
              name="password"
              className="border rounded-xl p-2 w-full"
            />
            {errors.password ? (
              <div className="text-red-500">{errors.password}</div>
            ) : (
              <></>
            )}
          </div>
          <div>
            <Field
              placeholder="Confirm"
              name="confirmPassword"
              className="border rounded-xl p-2 w-full"
            />
            {errors.confirmPassword ? (
              <div className="text-red-500">{errors.confirmPassword}</div>
            ) : (
              <></>
            )}
          </div>
          <div className="flex gap-2">
            <Checkbox />
            <p>Show password</p>
          </div>
          <Button className="bg-gray-400" type="submit">
            Lets go
          </Button>
          <p className="text-center mt-2">
            Already have an account? <a href="Login">Log in</a>
          </p>
        </Form>
      )}
    </Formik>
  );
};
export default SecondStep;
