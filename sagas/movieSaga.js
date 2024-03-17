/* eslint-disable prettier/prettier */
import {takeLatest, put} from 'redux-saga/effects';
import callApi from '../axios';

export function* fetchMovies({payload}) {
  // Hiển thị loading
  yield put({type: 'SHOW_LOADING'});

  // Trích xuất từ khóa (keyword) từ dữ liệu trong action gửi tới
  const {keyword} = payload;
  console.log('OK: ' + keyword);

  // Kết nối API để lấy dữ liệu từ server. Sử dụng thư viện axios
  const ENDPOINT = 'https://omdbapi.com';
  const res = yield callApi(ENDPOINT, 'GET', {s: keyword, apikey: '5008fdeb'});

  // Lấy được dữ liệu thì đẩy vào store để màn hình nào cũng truy xuất được.
  yield put({type: 'MOVIE_FETCHING', payload: res?.data?.Search || []});

  // Sau tất cả thì ẩn loading đi thôi
  yield put({type: 'HIDE_LOADING'});
}

// Hiểu nôm na là mapping hàm generator ở trên với action,
// để khi ở đó gọi action này thì sẽ gọi tới hàm generator tương ứng này
export const MovieSagas = [takeLatest('FETCHING', fetchMovies)];
