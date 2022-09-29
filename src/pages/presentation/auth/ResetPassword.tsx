import React, { useState } from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import { useFormik } from 'formik';
import Spinner from '../../../components/bootstrap/Spinner';
import Alert from '../../../components/bootstrap/Alert';

const ResetPassword = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			newPassword: '',
			confirmNewPassword: '',
		},
		validate: (values) => {
			const errors: { newPassword?: string; confirmNewPassword?: string } = {};

			if (!values.newPassword) {
				errors.newPassword = 'Required';
			}

			if (!values.confirmNewPassword) {
				errors.confirmNewPassword = 'Required';
			}

			return errors;
		},
		validateOnChange: false,
		onSubmit: () => {
			setIsLoading(true);
			if (formik.values.newPassword != formik.values.confirmNewPassword) {
				setTimeout(() => {
					formik.setFieldError('confirmNewPassword', 'Passwords do not match.');
					setIsLoading(false);
				}, 1000);
			} else {
				setIsLoading(false);
			}
		},
	});

	return (
		<PageWrapper isProtected={false} className='bg-primary'>
			<Page className='p-0'>
				<div className='row h-100 align-items-center justify-content-center'>
					<div className='col-xl-4 col-lg-6 col-md-8 shadow-3d-container'>
						<Card className='shadow-3d-dark' data-tour='login-page'>
							<CardBody>
								<div className='text-center h1 fw-bold mt-5 pb-4'>New Password</div>
								<div className='col mb-4'>
									<Alert color='success' isLight icon='Report' className='mb-0'>
										Please create a new password.
									</Alert>
								</div>

								<form className='row g-4'>
									<>
										<div className='col-12'>
											<FormGroup
												id='newPassword'
												isFloating
												label='New password'
												className='pb-2'>
												<Input
													type='password'
													autoComplete='current-password'
													value={formik.values.newPassword}
													invalidFeedback={formik.errors.newPassword}
													isTouched={formik.touched.newPassword}
													isValid={formik.isValid}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
												/>
											</FormGroup>
											<FormGroup
												id='confirmNewPassword'
												isFloating
												label='Confirm new password'>
												<Input
													type='password'
													autoComplete='current-password'
													value={formik.values.confirmNewPassword}
													isTouched={formik.touched.confirmNewPassword}
													invalidFeedback={
														formik.errors.confirmNewPassword
													}
													isValid={formik.isValid}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
												/>
											</FormGroup>
										</div>
										<div className='col-12'>
											<Button
												color='warning'
												className='w-100 py-3'
												isDisable={
													!formik.values.newPassword &&
													!formik.values.confirmNewPassword
												}
												onClick={formik.handleSubmit}>
												{isLoading && <Spinner isSmall inButton isGrow />}
												Change
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

export default ResetPassword;
