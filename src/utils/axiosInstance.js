
import axios from "axios";

// 기본 API URL 설정
const axiosInstance = axios.create({
  baseURL: "http://isaiah-dev.ddns.net:18080/api",
  // baseURL: "http://localhost:8080/api", 
  timeout: 600000, // 10분 이상 걸리면 타임아웃
});

// 요청 중 상태를 관리할 맵
const pendingRequests = new Map();

// 요청 인터셉터 추가: 로컬스토리지에서 토큰을 읽어 헤더에 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰을 가져옴
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Authorization 헤더에 토큰 추가
    }

    // 요청 키 생성 (예: GET:/api/integrated-career)
    const requestKey = `${config.method}:${config.url}`;

    // 동기 요청에는 중복 방지 로직 적용하지 않음
    const isSynchronousRequest = config.headers["Allow-Duplicate"];
    if (!isSynchronousRequest && pendingRequests.has(requestKey)) {
      // 중복 요청 감지 시 에러 반환
      return Promise.reject(new Error("중복 요청입니다."));
    }

    // 진행 중인 요청으로 등록
    if (!isSynchronousRequest) {
      pendingRequests.set(requestKey, true);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가: 요청 완료 후 맵에서 제거
axiosInstance.interceptors.response.use(
  (response) => {
    const requestKey = `${response.config.method}:${response.config.url}`;
    if (!response.config.headers["Allow-Duplicate"]) {
      pendingRequests.delete(requestKey); // 요청 완료 시 상태 제거
    }
    return response;
  },
  (error) => {
    if (error.config) {
      const requestKey = `${error.config.method}:${error.config.url}`;
      if (!error.config.headers["Allow-Duplicate"]) {
        pendingRequests.delete(requestKey); // 에러 발생 시 상태 제거
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
