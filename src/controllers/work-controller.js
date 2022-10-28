import { StatusCodes } from 'http-status-codes'
import Work from '../models/work.js'

const createWork = async (req, res, next) => {
	const { title, describe } = req.body

	try {
		const work = await Work.create({
			title,
			describe,
		})

		await res.status(StatusCodes.OK).json({
			status: StatusCodes.OK,
			msg: 'Success!',
			data: work,
		})
	} catch (error) {
		next(error)
	}
}

const updateWork = async (req, res, next) => {
	const { id, title, describe } = req.body

	const data = await Work.findOneAndUpdate({ _id: id }, { title: title, describe: describe })

	// console.log({ data })
	await res.status(StatusCodes.OK).json({
		status: StatusCodes.OK,
		msg: 'Success!',
	})
	try {
	} catch (error) {
		next(error)
	}
}

const deleteWork = async (req, res, next) => {
	const { title } = req.body

	const data = await Work.findOneAndDelete({ title: title })
	await res.status(StatusCodes.OK).json({
		status: StatusCodes.OK,
		msg: 'Success!',
	})
	try {
	} catch (error) {
		next(error)
	}
}

const getWorks = async (req, res, next) => {
	try {
		const works = await Work.find()
		await res.status(StatusCodes.OK).json({
			status: StatusCodes.OK,
			msg: 'Success!',
			data: works,
		})
	} catch (error) {
		next(error)
	}
}

export { createWork, updateWork, deleteWork, getWorks }
