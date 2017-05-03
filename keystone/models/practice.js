var keystone = require('keystone'),
	Types = keystone.Field.Types;
 
var Practice = new keystone.List('Practice');
 
Practice.add(

	'Basic Information',
	{
		name: { type: Types.Text, required: true, index: true }
	}
);

Practice.relationship({ path: 'lawyers', ref: 'Lawyer', refPath: 'areasOfFocus' });
 
Practice.register();