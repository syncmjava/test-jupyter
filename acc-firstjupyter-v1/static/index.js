define([
    'base/js/namespace',
    'jquery',
    'base/js/utils',
    'base/js/dialog'
], function(Jupyter, $, utils, dialog) {

    function doSomething() {
        var container = $('#notebook-container');
        if (confirm('This will upload your notebook for preview. Are you sure??')) {
            // var re = /.\/notebooks(.*?)$/;
            // var filepath = window.location.pathname.match(re)[1];
            // var payload = {
            //     'filename': filepath
            // };
            // var krPreviewUrl = utils.url_path_join(utils.get_body_data('baseUrl'), 'krpreviewv2')

            // var settings = {
            //         url : krPreviewUrl,
            //         processData : false,
            //         type : "PUT",
            //         xsrf_cookies : false,
            //         dataType: "json",
            //         data: JSON.stringify(payload),
            //         contentType: 'application/json',
            //         success: function(data) {
            //             alert(data.statusText+ " : "+ data.message);
            //             $('.commit-feedback').remove();
            //         },
            //         error: function(data) {
            //             alert(data.statusText + " : "+ data.message);
            //             $('.commit-feedback').remove();
            //         }
            //     };

            //     // display preloader during commit and push
            //     var preloader = '<img class="commit-feedback" src="xxx/ajax-loader.gif">';
            //     container.prepend(preloader);

            //     $.ajax(settings);
        } else {

        }
        }

    function place_button() {
        if (!Jupyter.toolbar) {
            $([Jupyter.events]).on("app_initialized.NotebookApp", place_button);
            return;
        }
        Jupyter.toolbar.add_buttons_group([{
            label: 'acc-firstjupyter',
            icon: 'test-git',
            callback: doSomething
        }])
    }

    function load_ipython_extension() {
        place_button();
    }

    return {
        load_ipython_extension: load_ipython_extension
    };

});

