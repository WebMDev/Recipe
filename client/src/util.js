import {toast} from "react-toastify";

export const handlesuccess = (msg) => {
    // console.log(msg);
    
    toast.success(msg, {
        position : 'top-right',
    })
}

export const handleError = (msg) => {
    // console.log(msg);
    
    toast.error(msg, {
        position : 'top-right',
    })
}



// import { toast } from "react-toastify";

// let toastId;

// export const handlesuccess = (msg) => {
//     console.log(msg);
        
//     if (!toast.isActive(toastId)) {

//         toastId = toast.success(msg, { position: 'top-right' });

//     } else {
        
//         toast.update(toastId, { render: msg, type: toast.TYPE.SUCCESS });
//     }
// };

// export const handleError = (msg) => {
//     console.log(msg);
    
//     if (!toast.isActive(toastId)) {

//         toastId = toast.error(msg, { position: 'top-right' });

//     } else {
        
//         toast.update(toastId, { render: msg, type: toast.TYPE.ERROR });
//     }
// };