// cd /var/www/sm/sail; sails lift --verbose
// sudo apt-get install npm; sudo npm -g install sails
// sails new sail --template=jade // (new project name)
// npm --save install grunt sails-mysql sails-disk jade bcrypt
// package.json
// npm i
/**
 * HomeController
 *
 * @module		:: Controller
 * @description	:: A set of functions called `actions`.
 *
 *					Actions contain code telling Sails how to respond to a certain type of request.
 *					(i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *					You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *					and/or override them with custom routes (`config/routes.js`)
 *					NOTE: The code you write here supports both HTTP and Socket.io automatically.
 * @docs		:: http://sailsjs.org/#!documentation/controllers
 */
'use strict';
//var fs = require('fs');
//var async = require('async');
module.exports = {
	/**
	 * @function name:	index: function (req, res)
	 * @description:	This function renders home page.
	 * @related issues:	SM-001
	 * @param:			object req
	 * @param:			object res
	 * @return:			void
	 * @author:			Don Hsieh
	 * @since:			10/25/2014
	 * @last modified: 	10/25/2014
	 * @called by:		URL '/'
	 */
	index: function (req, res) {
		console.log('HomeController - index: function (req, res)');
		var fs = require('fs');
		//var _ = require('lodash');
		var arr = fs.readFileSync('../data/home.csv').toString().split('\n');
		console.log('arr =', arr);
		var items = [];
		var item = [];
		for(var i in arr) {
			if (i > 0) {
				//console.log(arr[i]);
				//item = _.toArray(arr[i]);
				item = arr[i].split(',');
				items.push(item);
			}
		}
		console.log('items =', items);

		var rows = [];
		var row = [];
		for(var i in items) {
			item = items[i];
			row.push(item);
			if (row.length >= 3) {
				rows.push(row);
				row = [];
			}
		}
		console.log('rows =', rows);
		res.view({
			rows: rows
		});
	},

	/**
	 * @function name:	find: function (req, res)
	 * @description:	This function renders records of sites.
	 * @related issues:	WD-026
	 * @param:			object req
	 * @param:			object res
	 * @return:			void
	 * @author:			Don Hsieh
	 * @since:			06/20/2014
	 * @last modified: 	06/20/2014
	 * @called by:		Button "Browse all records"
	 *					 in sail/views/site/index.jade
	 */
	find: function (req, res) {
		console.log('HomeController - find: function (req, res)');
	},

	/**
	 * Overrides for the settings in `config/controllers.js`
	 * (specific to HomeController)
	 */
	_config: {}
};