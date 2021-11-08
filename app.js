function rebateModal() {
    $(".rebate-modal-btn").click(function() {
        $(".rebate-modal-container").addClass("display-rebate-modal");
        $(".rebate-modal-container").removeClass("hide-rebate-modal");

        $(".rebate-modal-content").addClass("display-rebate-modal-content");
        $(".rebate-modal-content").removeClass("hide-rebate-modal-content");
    });
}

rebateModal();

function rebateCloseModal() {
    $(".rebate-modal-exit-icon-box").click(function() {
        $(".rebate-modal-container").removeClass("display-rebate-modal");
        $(".rebate-modal-container").addClass("hide-rebate-modal");

        $(".rebate-modal-content").removeClass("display-rebate-modal-content");
        $(".rebate-modal-content").addClass("hide-rebate-modal-content");
    })
}

rebateCloseModal();