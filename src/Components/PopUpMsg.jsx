import Swal from "sweetalert2";

//For error messages don't pass color as an argument when calling the function. Leave default
//Popup error message
export const popupMsg = (text, color = "red", icon = "error") =>
  Swal.fire({
    icon: icon,
    iconColor: color,
    title: text,
    showConfirmButton: false,
    timer: 1500,
  });

//
//Toasts msg
export const popupToast = (text, iconColor = "red", icon = "error") => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
  Toast.fire({
    icon: icon,
    iconColor: iconColor,
    title: text,
  });
};
