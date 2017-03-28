var model = {
    selectors: {}
};

$(function () {
    initializeModel();
    getRepoList(model.selectors.repo);
});

var initializeModel = function () {
    model.selectors.repo = $('#selectRepoId');
};

var getRepoList = function (renderer) {

    jQuery.ajax({
        url: repoLoaderServiceUrl,
        cache: false,
        type: 'GET',
        success: function (result) {
            renderRepoList(result, renderer);
        }
    });
};

var renderRepoList = function (result, renderer) {

    var html = "";
    html += '<option value="" disabled selected>Select repository</option>';
    result.repoList.forEach(function (entry) {
        html += "<option value='" + entry.id + "'>" + entry.id + "</option>";
    });

    renderer.html(html);
};
