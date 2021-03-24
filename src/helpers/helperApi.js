import swal from "sweetalert2";

export function errorReturn(error, dispatch) {
  if (error.response) {
    if (error.response.status === 401) {
    } else if (error.response.status >= 500) {
      return swal.fire("Gagal!", "Kegagalan pada server", "error");
    } else {
      return error.response;
    }
  }
  return null;
}

export function successReturn(response, message) {
  swal.fire("Succes!", message, "success");
  return response.data;
}
