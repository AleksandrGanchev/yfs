import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import { useFormik } from 'formik';
import Spinner from '../../../components/bootstrap/Spinner';
import { demoPages } from '../../../menu';

const ForgotPassword = () => {
	const navigate = useNavigate();
	const handleOnClickToResetPassword = useCallback(
		() => navigate(`../${demoPages.resetPassword.path}`),
		[navigate],
	);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			emailField: '',
		},
		validate: (values) => {
			const errors: { emailField?: string } = {};
			if (!values.emailField) {
				errors.emailField = 'Required';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
				errors.emailField = 'Invalid email address';
			}
			return errors;
		},
		validateOnChange: false,
		onSubmit: () => {
			setIsLoading(true);
			setTimeout(() => {
				handleOnClickToResetPassword();
				setIsLoading(false);
			}, 1000);
		},
	});

	return (
		<PageWrapper isProtected={false} className='bg-primary'>
			<Page className='p-0'>
				<div className='row h-100 align-items-center justify-content-center'>
					<div className='col-xl-4 col-lg-6 col-md-8 shadow-3d-container'>
						<Card className='shadow-3d-dark' data-tour='login-page'>
							<CardBody>
								<div className='text-center h1 fw-bold mt-5 pb-4'>
									Forgot Password
								</div>
								<div className='text-center h4 text-muted mb-5'>
									Enter your email address
								</div>
								<form className='row g-4'>
									<>
										<div className='col-12'>
											<FormGroup
												id='emailField'
												isFloating
												label='Enter email address'>
												<Input
													autoComplete='email'
													value={formik.values.emailField}
													isTouched={formik.touched.emailField}
													invalidFeedback={formik.errors.emailField}
													isValid={formik.isValid}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													onFocus={() => {
														formik.setErrors({});
													}}
												/>
											</FormGroup>
										</div>
										<div className='col-12'>
											<Button
												color='warning'
												className='w-100 py-3'
												isDisable={!formik.values.emailField}
												onClick={formik.handleSubmit}>
												{isLoading && <Spinner isSmall inButton isGrow />}
												Continue
											</Button>
										</div>
									</>
								</form>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ForgotPassword;
