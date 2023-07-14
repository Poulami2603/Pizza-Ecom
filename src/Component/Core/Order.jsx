import React from 'react'
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { orderSchema } from '../../Validation/Schema';
const Order = () => {
    const navigate = useNavigate()
    function billingFunction() {
        if (document.getElementById('same').checked) {
            document.getElementById('billaddress-one').value = document.getElementById('address-one').value;
            document.getElementById('billaddress-two').value = document.getElementById('address-two').value;
            document.getElementById('billcity').value = document.getElementById('city').value;
            document.getElementById('billstate').value = document.getElementById('state').value;
            document.getElementById('billzip').value = document.getElementById('zip').value;
            document.getElementById('billcountry').value = document.getElementById('country').value;
        }
        else {
            document.getElementById('billaddress-one').value = '';
            document.getElementById('billaddress-two').value = '';
            document.getElementById('billcity').value = '';
            document.getElementById('billstate').value = '';
            document.getElementById('billzip').value = '';
            document.getElementById('billcountry').value = '';
        }
    }

    const initial = {
        fname:'',
        lname: '',
        phone: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    }

    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: initial,
        validationSchema: orderSchema,
        onSubmit: () =>{
            
        }
    })

    const handelClick = () => {
        swal({
            title: "Your Order is Placed",
            text: "Thanks for choose Pizza Delicious",
            icon: "success",
            button: true,
            dangerMode: false,
        })
            .then((willDelete) => {
                if (willDelete) {
                    navigate('/')
                }
            });
    }
    return (
        <>
            <Navbar />
            <div className="container order-container">
                <div className="form__container">
                    <h1 className='text-dark fw-bold text-center'>Billing Details </h1>
                    <section className="form__personal">
                        <div className="sections">
                            <div className="box">1</div><span>Personal Information</span>
                        </div>
                        <div className="personal--form">
                            <form className="form--name" action onSubmit={handleSubmit}>
                                <div className="first">
                                    {errors.fname && touched.fname ? (<label className='text-danger'>{errors.fname}</label>) : ''}
                                    <input required="required" autoComplete="on" placeholder="First Name" id="firstname" type="text" name='fname' value={values.fname} onChange={handleChange} onBlur={handleBlur}/>
                                </div>
                                <div className="last ml-5">
                                    {errors.lname && touched.lname ? (<label className='text-danger'>{errors.lname}</label>) : ''}
                                    <input required="required" autoComplete="on" placeholder="Last Name" id="firstname" type="text" name='lname' value={values.lname} onChange={handleChange} onBlur={handleBlur}/>
                                </div>
                                <div className="number">
                                    {errors.phone && touched.phone ? (<label className='text-danger'>{errors.phone}</label>) : ''}
                                    <input required="required" autoComplete="on" pattern="[0-9]*" maxLength={10} placeholder="e.g. XXXXXXXXXX" id="mobilenumber" type="mobilenumber" name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur}/>
                                </div>
                                <div className="email ml-5">
                                    {errors.email && touched.email ? (<label className='text-danger'>{errors.email}</label>) : ''}
                                    <input required="required" autoComplete="on" placeholder="e.g. xyz@gmail.com" id="email" type="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section className="form__billing">
                        <div className="sections">
                            <div className="box billing">2</div><span>Installation Address</span>
                        </div>
                        <div className="shipping--form">
                            <form className="form--shipping" action onSubmit={handleSubmit}>
                                <div className="row one">
                                    <div className="address">
                                        {errors.address1 && touched.address1 ? (<label className='text-danger'>{errors.address1}</label>) : ''}
                                        <input required="required" placeholder="e.g. 1 Infinite Loop" id="address-one" type="text" name='address1' value={values.address2} onChange={handleChange} onBlur={handleBlur}/>
                                    </div>
                                    <div className="address-two ml-5">
                                        {errors.address2 && touched.address2 ? (<label className='text-danger'>{errors.address2}</label>) : ''}
                                        <input id="address-two" type="text" name='address2' value={values.address2} onChange={handleChange} onBlur={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row two">
                                    <div className="city">
                                        {errors.city && touched.city ? (<label className='text-danger'>{errors.city}</label>) : ''}
                                        <input required="required" placeholder="e.g. Mumbai" id="city" type="text" name='city' value={values.city} onChange={handleChange} onBlur={handleBlur}/>
                                    </div>
                                    <div className="state ml-5">
                                        {errors.state && touched.state ? (<label className='text-danger'>{errors.state}</label>) : ''}
                                        <input required="required" placeholder="e.g. Maharashtra" id="state" type="text" name='state' value={values.state} onChange={handleChange} onBlur={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row three">
                                    <div className="zip">
                                        {errors.zip && touched.zip ? (<label className='text-danger'>{errors.zip}</label>) : ''}
                                        <input required="required" pattern="[0-9]*" maxLength={6} placeholder="e.g. 220001" id="zip" type="text" name='zip' value={values.zip} onChange={handleChange} onBlur={handleBlur}/>
                                    </div>
                                    <div className="country ml-5">
                                        {errors.country && touched.country ? (<label className='text-danger'>{errors.country}</label>) : ''}
                                        <input required="required" placeholder="e.g. INDIA" id="country" type="text" name='country' value={values.country} onChange={handleChange} onBlur={handleBlur}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section className="form__shipping">
                        <div className="sections">
                            <div className="box">3</div><span>Billing Address</span>
                        </div>
                        <div className="shipping--form">
                            <form className="form--shipping" action >
                                <div className="row one">
                                    <div className="address">
                                        <label htmlFor="address-one">Address Line 1</label>
                                        <input name="billaddress1" placeholder id="billaddress-one" type="text" />
                                    </div>
                                    <div className="address-two ml-5">
                                        <label htmlFor="address-two">Address Line 2</label>
                                        <input name="billaddress2" id="billaddress-two" type="text" />
                                    </div>
                                </div>
                                <div className="row two">
                                    <div className="city">
                                        <label htmlFor="city">City</label>
                                        <input name="billcity" placeholder id="billcity" type="text" />
                                    </div>
                                    <div className="state ml-5">
                                        <label htmlFor="state">State / Province / Region</label>
                                        <input name="billstate" placeholder id="billstate" type="text" />
                                    </div>
                                </div>
                                <div className="row three">
                                    <div className="zip">
                                        <label htmlFor="zip">Zip / Postal Code</label>
                                        <input name="billzipcode" pattern="[0-9]*" maxLength={6} placeholder id="billzip" type="text" />
                                    </div>
                                    <div className="country ml-5">
                                        <label htmlFor="country">Country</label>
                                        <input name="billcountry" placeholder id="billcountry" type="text" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    <div className="form__question">
                        <input type="checkbox" id="same" name="same" onChange={billingFunction} />
                        <p className='mt-2'>Is your shipping address the same as your billing address ?</p>
                    </div>
                    <div className="form__question">
                        <div className="d-flex">
                            <input type="checkbox" className='mt-1' id="same" name="same" />
                            <p className="ml-2">Only Available Cash On Delivery</p>
                        </div>
                    </div>
                    <div className="form__confirmation">
                        <button onClick={handelClick}>Confirm Information</button>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Order