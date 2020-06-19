import { useFormik } from 'formik';
import * as Yup from 'yup'

import Nav from '../components/nav'

export default function IndexPage() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must be less then 15 charaters').required('Required'),
      lastName: Yup.string().max(20, 'Must be less than 20 characters long').required('Required'),
      email: Yup.string().email('Must be valid email').required('Required')
    })
  })
  return (
    <div>
      <Nav />
      <div className="hero">
        <h1 className="title">Next.js + Tailwind CSS</h1>
      </div>
      <div className="container mx-auto px-3">
        <form method="POST" action="/success" data-netlify="true">
          <div className="flex flex-col mb-3">
            <label htmlFor="firstName" className="flex flex-col">
              First Name
              <input type="text" name="firstName" id="firstName" {...formik.getFieldProps('firstName')} className={`border py-2 px-3 rounded ${formik.errors.firstName ? 'border-red-500' : ''}`}/>
            </label>
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="lastName" className="flex flex-col">
              Last Name
              <input type="text" name="lastName" id="lastName" {...formik.getFieldProps('lastName')} className={`border py-2 px-3 rounded ${formik.errors.lastName ? 'border-red-500' : ''}`}/>
            </label>
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="email" className="flex flex-col">
              Email
              <input type="email" name="email" id="email" {...formik.getFieldProps('email')} className={`border py-2 px-3 rounded ${formik.errors.email ? 'border-red-500' : ''}`}/>
            </label>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div>
            <button className="py-2 px-3 bg-blue-200 hover:bg-blue-800 hover:text-blue-200 text-blue-800 rounded" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
