import toastr from 'toastr';

const toastrOptions = {
  error: {
    closeButton: true,
    progressBar: true,
    newestOnTop: false,
    showDuration: '100',
    hideDuration: '100',
    timeOut: '0',
  },
};

export const toastError = (err, header = 'Error', option = toastrOptions.error) => {
  toastr.error(err.message, header, option);
};
