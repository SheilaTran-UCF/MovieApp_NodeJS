import authRouter from './auth.js'
import meRouter from './me.js'

export const route = (app) => {
	app.use('/api/v1/auth', authRouter)
	app.use('/api/v1/me', meRouter)
	app.use('/api/v1/contact', meRouter)
}
