import Swal from "sweetalert2";

//Popup error message
export const errorPopupMsg = (text) =>
  Swal.fire({
    icon: "error",
    iconColor: "red",
    title: text,
    showConfirmButton: false,
    timer: 1500,
  });

//
//Toasts msg
export const errorPopupToast = (text) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
  Toast.fire({
    icon: "warning",
    iconColor: "#f39f18",
    title: text,
  });
};

export const successPopupToast = (text) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
  Toast.fire({
    icon: "success",
    iconColor: "#9acd32",
    title: text,
  });
};
