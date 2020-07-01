/**
 *
 * Alert
 *
 */

import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';

const toastConfig = {
  position: toast.POSITION.TOP_CENTER,
  hideProgressBar: true,
  autoClose: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  bodyClassName: css({
    padding: '0 5px'
  }),
  closeButtonClassName: css({
    lineHeight: 1,
  }),
};

function Alert({ alerts }) {
  useEffect(() => {
    if (alerts) {
      switch (alerts.type) {
        case 'success':
          toast.success(alerts.message, {
            ...toastConfig,
            className: css({
              color: 'black',
              width: '100%',
              minHeight: '40px',
              background: 'white !important',
              border: '1px solid black',
              borderRadius: '0',
              textAlign: 'center'
            }),
          });
          break;
        case 'error':
          toast.error(alerts.message, {
            ...toastConfig,
            className: css({
              color: 'white',
              width: '100%',
              minHeight: '40px',
              background: 'red !important',
              borderRadius: '0',
              textAlign: 'center'
            }),
          });
          break;
        default:
          toast(alerts.message, toastConfig);
          break;
      }
    }
  }, [alerts]);

  return <ToastContainer style={{width: "340px", marginLeft: "-170px"}} />;
}

Alert.propTypes = {};

export default Alert;
