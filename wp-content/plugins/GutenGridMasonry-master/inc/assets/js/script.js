var $ = jQuery.noConflict();


/** Script on ready start
------------------------------------------------------------------------------*/
jQuery(() => {

    console.log('====================================');
    console.log('test');
    console.log('====================================');

    /** Post Grid Isotope Masonry options */
    jQuery('.gmfgb-pg-grid .gmfgb-pg-loop-wrap').isotope({
        itemSelector: '.wp-block-post',
        percentPosition: true,
        masonry: {
            gutter: 20,
            columnWidth: '.gmfgb-pg-wrap'
            // use outer width of grid-sizer for columnWidth
            //columnWidth: '.grid-sizer'
        }
    });

    /** Media Grid Isotope Masonry options */
    jQuery('.gmfgb-mg-grid').isotope({
        itemSelector: '.gmfgb-mg-media',
        percentPosition: true,
        masonry: {
            gutter: 20,
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.gmfgb-mg-media'
        }
    });

    //jQuery(window).resize();

    /** Fancybox bindings for Media Grid */
    // Fancybox.bind('[data-fancybox]', {
    //     mainClass: "gmfgb-fancy-custom",
    // });
    /*jQuery("[data-fancybox]").each(function () {
        $this = jQuery(this);
        $datafancyclass = jQuery(this).attr('data-fancy-class');
        console.log($datafancyclass);
        Fancybox.bind('[data-fancybox="video-gallery-' + $datafancyclass + '"]', {
            mainClass: `gmfgb-fancy-custom ` + $datafancyclass + '-fancy-custom',
        });
        // jQuery(".vl-button ." + $datafancyclass).fancybox({
        //     mainClass: $datafancyclass + '-fancy-custom'
        //     // Add other options as needed
        // });
        // Fancybox.bind(['data-fancybox="video-lightbox-' + $datafancyclass + '"'] , {
        //     mainClass: `video-lightbox-fancy ` + $datafancyclass + '-fancy-custom',
        // });
        // var galleryId = $(this).data("fancybox");
        // $(this).find("a").attr("data-fancybox", galleryId);
    });*/
});
/** ----------------------------------------------------------------------------
Script on ready end */