var keystone = require('keystone'),
	Types = keystone.Field.Types;
 
var Lawyer = new keystone.List('Lawyer');
 
Lawyer.add(

	'Basic Information',
	{
		name: { type: Types.Name, required: true, index: true },
		//title: { type: Types.Relationship, ref: 'LawyerTitle' },
	},

	'Contact Information',
	{
		phone: { type: Types.Text },
		email: { type: Types.Email },
	},

	'Details',
	{
		//location: {type: Types.Relationship, ref: 'Location' },
		bio: { type: Types.Markdown },
		//barAdmissions: { type: Types.Relationship, ref: 'BarAdmission', many: true },
		areasOfFocus: { type: Types.Relationship, ref: 'Practice', many: true },
	}

);
 
Lawyer.register();