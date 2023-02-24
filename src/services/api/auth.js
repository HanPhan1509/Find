import {END_POINTS} from '@constants/apiUrl';
import {APIUtils} from '@utils';

export function loginApi(payload) {
  return APIUtils.post(END_POINTS.LOGIN_URL, {body: payload});
}
