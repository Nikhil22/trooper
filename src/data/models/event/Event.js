import DataType from 'sequelize';
import Model from '../../sequelize';

const Event = Model.define('Event', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  startDate: {
    type: DataType.DATE,
  },

  endDate: {
    type: DataType.DATE,
  },

  clientEmail: {
    type: DataType.STRING(255),
    validate: { isEmail: true },
  },

  summary: {
    type: DataType.STRING(400),
  },

}, {

  indexes: [
    { fields: ['endDate'] },
  ],

});

export default Event;
