"use client";
import { Button } from "../../components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("required"),
});

const ThirdStep = () => {
  const router = useRouter();
  const getLogin = async (values: { email: string; password: string }) => {
    const response = await axios.post("http://localhost:4007/user", values);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("address", response.data.data);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    router.push("/home");
  };

  return (
    <div className="flex w-full justify-between h-screen">
      <div className="w-2/5 h-full flex justify-center items-center text-gray-500 text-sm">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
            getLogin(values);
          }}
        >
          {({ errors }) => (
            <Form className="w-2/5 h-1/3 flex flex-col gap-6">
              <div className="border w-fit rounded-8">
                <ChevronLeft />
              </div>
              <div>
                <h3 className="text-black text-lg">Log In</h3>
                <p>Log in to enjoy your favorite dishes</p>
              </div>
              <div>
                <Field
                  name="email"
                  placeholder="Enter your email adress"
                  className="border rounded-xl p-2 w-full"
                />
                {errors.email ? (
                  <div className="text-red-500">{errors.email}</div>
                ) : null}
              </div>
              <div>
                <Field
                  name="password"
                  placeholder="Password"
                  className="border rounded-xl p-2 w-full"
                />
                {errors.password ? (
                  <div className="text-red-500">{errors.password}</div>
                ) : null}
              </div>
              <Button className="bg-gray-400" type="submit">
                Let's go
              </Button>
              {/* <p className="text-center mt-2">
                Already have an account? <a href="#">Log in</a>
              </p> */}
            </Form>
          )}
        </Formik>
      </div>
      <div className="w-3/5 h-screen">
        <img src="./bicycle.png" />
      </div>
    </div>
  );
};
export default ThirdStep;
