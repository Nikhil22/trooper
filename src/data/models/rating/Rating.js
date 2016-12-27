import DataType from 'sequelize';
import Model from '../../sequelize';

const Rating = Model.define('Rating', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  rating: {
    type: DataType.INTEGER,
  },

  maxRating: {
    type: DataType.INTEGER,
  },

}, {

  indexes: [
    { fields: ['rating', 'maxRating'] },
  ],

});

export default Rating;
