'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	symbol: {
		type: String,
		default: '',
		trim: true,
		required: 'Symbol cannot be blank'
	},
	price: {
		type: Number,
		default: 0,
		trim: true,
		required: 'Price cannot be blank'
	},
	quantity: {
		type: Number,
		default: 0,
		trim: true,
		required: 'Quantity cannot be blank'
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Article', ArticleSchema);