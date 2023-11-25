const ModalTrigger = ({ className, modalTarget, children, style}) => {
    console.log(modalTarget);
    return ( 
        <button className={className} style={style} data-bs-toggle="modal" data-bs-target={`#${modalTarget}`}>
            {children}
        </button>
     );
}
 
export default ModalTrigger;