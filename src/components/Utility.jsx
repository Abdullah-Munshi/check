import stripeIcon from "../assets/ft-sign.svg";
export const DataSelected = () => {
  return (
    <div className="data-selected absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
        >
          <path
            d="M17.2258 28.5397L9.31836 20.6304L11.9535 17.9952L17.2258 23.2656L27.7665 12.723L30.4035 15.3601L17.2258 28.536V28.5397Z"
            fill="#1F7D00"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 20.5C0 9.17841 9.17841 0 20.5 0C31.8216 0 41 9.17841 41 20.5C41 31.8216 31.8216 41 20.5 41C9.17841 41 0 31.8216 0 20.5ZM20.5 37.2727C18.2974 37.2727 16.1163 36.8389 14.0814 35.996C12.0464 35.1531 10.1974 33.9176 8.63989 32.3601C7.0824 30.8026 5.84693 28.9536 5.00402 26.9186C4.16111 24.8837 3.72727 22.7026 3.72727 20.5C3.72727 18.2974 4.16111 16.1163 5.00402 14.0814C5.84693 12.0464 7.0824 10.1974 8.63989 8.63989C10.1974 7.0824 12.0464 5.84693 14.0814 5.00402C16.1163 4.16111 18.2974 3.72727 20.5 3.72727C24.9484 3.72727 29.2146 5.49439 32.3601 8.63989C35.5056 11.7854 37.2727 16.0516 37.2727 20.5C37.2727 24.9484 35.5056 29.2146 32.3601 32.3601C29.2146 35.5056 24.9484 37.2727 20.5 37.2727Z"
            fill="#1F7D00"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export const StripeIcon = () => {
  return <img className="w-[238px]" src={stripeIcon} alt="icon" />;
};
