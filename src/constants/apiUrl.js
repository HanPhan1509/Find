import AppConfigs from '~configs/env';
const domain = AppConfigs.domain;

const END_POINTS = {
  LOGIN_URL: domain + '/api/v1/account/login',
  ADD_DEVICE_TOKEN_URL: domain + '/api/v1/add-device-token',
  GET_LIST_FACTORY_URL: domain + '/api/v1/factory',
  GET_LIST_CABINET_BY_FACTORY_URL: domain + '/api/v1/cabinet-by-factory',
  GET_LATEST_CABINET_INFO_URL: domain + '/api/v1/tracking-cabinet/latest',
};

export {END_POINTS};
