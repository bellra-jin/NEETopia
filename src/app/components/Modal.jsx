

const Modal = ({ message, onClose, isError, backendErrorMessage }) => (
  <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
    <div className="bg-white p-16 rounded-lg shadow-lg w-[500px] h-auto max-w-full relative">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-5 text-gray-600 text-xl"
      >
        &times; {/* Close button */}
      </button>
      
      {/* Icon and Message */}
      <div className="flex flex-col items-center mb-6">
        {isError ? (
          <div className="mb-4 text-red-500">
            <span role="img" aria-label="error" className="text-4xl">
              ❗
            </span>
          </div>
        ) : (
          <div className="mb-4 text-blue-500">
            <span role="img" aria-label="success" className="text-4xl">
              ✅
            </span>
          </div>
        )}
        <h3 className={`text-lg font-medium ${isError ? 'text-red-500' : 'text-blue-500'} text-center`}>
          {message} {/* Main Message */}
        </h3>
      </div>

      {/* Backend Error Message for failure */}
      {isError && backendErrorMessage && (
        <p className="text-red-500 mb-4 text-center text-sm">
          {backendErrorMessage} {/* Backend error message */}
        </p>
      )}

      {/* Smaller text */}
      <p className="text-gray-600 mb-6 text-center text-xs">
        {isError ? '처음부터 다시 진행해 주세요.' : '회원가입이 완료되었습니다.'}
      </p>

      {/* Action Button */}
      <div className="flex justify-center">
        <button
          onClick={onClose}
          className={`w-full py-3 px-6 rounded-full transition ${
            isError ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {isError ? "확인" : "로그인 하러 가기"}
        </button>
      </div>
    </div>
  </div>
);

export default Modal;


