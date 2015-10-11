Schemas = {};

Workshops = new Mongo.Collection('workshops');

Schemas.Workshops = new SimpleSchema({
  title: {
    type: String,
    max: 2056
  },
  intro: {
    type: String,
    max: 2056
  },
  location: {
   type: String,
   allowedValues: ['Workshops room 1', 'Workshops room 2', 'Workshops room 3']
  },
  workshoper: {
    type: String,
    max: 2056
  },
  seats: {
   type: Number,
   decimal: false,
   min: 1,
   defaultValue: 30
  },
  description: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor'
      }
    }
  },
  startAt: {
    type: String,
    max: 100
  },
  attendees: {
    type: [String],
    regEx: SimpleSchema.RegEx.Id,
    optional: true,
    autoform: {
      options: function () {
        return _.map(Meteor.users.find().fetch(), function (user) {
          return {
            label: user.profile.name + ' - ' + user.emails[0].address,
            value: user._id
          };
        });
      }
    }
  }
});

Workshops.attachSchema(Schemas.Workshops)
