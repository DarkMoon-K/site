window.onload=function () {
    var MODAL_OVERLAY_CLASS_NAME='modal-overlay';
    var ACTIBE_MODAL_CLASS_NAME='active';
    var openModalButton=document.querySelector('.open-modal-button');
    var closeModalButton=document.querySelector('.close-modal-button');
    var modalOverlay=document.querySelector('.'+ MODAL_OVERLAY_CLASS_NAME);
    openModalButton.addEventListener('click', function (event) {
        modalOverlay.classList.toggle(ACTIBE_MODAL_CLASS_NAME);

    });

    closeModalButton.addEventListener('click',function (event) {

        modalOverlay.classList.toggle(ACTIBE_MODAL_CLASS_NAME);
    });
    modalOverlay.addEventListener('click',function (event) {
        if(event.target.classList.contains(MODAL_OVERLAY_CLASS_NAME))
            modalOverlay.classList.toggle(ACTIBE_MODAL_CLASS_NAME);

    })
};