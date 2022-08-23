import { sendEmail } from './send-email.js'

export const sendVerificationEmail = async ({ name, email, verificationToken, origin }) => {
	const verifyEmail = `${origin}/api/v1/auth/verify-email?token=${verificationToken}&email=${email}`

	const message = `<p>Please confirm your email by clicking on the following link : 
    <a href="${verifyEmail}">Verify Email</a> </p>`

	return sendEmail({
		to: email,
		subject: 'Email Confirmation',
		html: `<h4> Hello, ${name}</h4>
      ${message}
      `,
	})
}
