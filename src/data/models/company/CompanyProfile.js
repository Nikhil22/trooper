import DataType from 'sequelize';
import Model from '../../sequelize';

const CompanyProfile = Model.define('CompanyProfile', {

  companyId: {
    type: DataType.UUID,
    primaryKey: true,
  },

  displayName: {
    type: DataType.STRING(100),
  },

  picture: {
    type: DataType.STRING(255),
  },

  location: {
    type: DataType.STRING(100),
  },

  website: {
    type: DataType.STRING(255),
  },

});

export default CompanyProfile;
