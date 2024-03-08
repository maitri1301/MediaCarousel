console.log(1111);
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block/media-grid/media-grid.js":
/*!********************************************!*\
  !*** ./src/block/media-grid/media-grid.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/block/media-grid/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/block/media-grid/editor.scss");
/* harmony import */ var _placeholder_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeholder-image.png */ "./src/block/media-grid/placeholder-image.png");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);

/**
 * Import style for backend and front end
*/



/**
 * import placeholder image to shown defalt
 */


/**
* WordPress dependencies
* @return void
*/







/**
 * Media Grid block registration
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.registerBlockType)('grid-masonry-for-guten-blocks/media-grid', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Media Grid', 'grid-masonry-for-guten-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Media grid Masonry is having ability to add Images tht will have option to view in model area like popup in full screen and also having an option to play video to the image', 'grid-masonry-for-guten-blocks'),
  //icon: 'format-gallery',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    fill: "#000000"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "SVGRepo_tracerCarrier",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "SVGRepo_iconCarrier"
  }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "\uD83D\uDD0D-System-Icons",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "ic_fluent_sub_grid_24_filled",
    fill: "#212121",
    "fill-rule": "nonzero"
  }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.75,3 C19.5449,3 21,4.45507 21,6.25 L21,6.25 L21,17.75 C21,19.5449 19.5449,21 17.75,21 L17.75,21 L6.25,21 C4.45507,21 3,19.5449 3,17.75 L3,17.75 L3,6.25 C3,4.45507 4.45507,3 6.25,3 L6.25,3 Z M14.25,7 C15.7688,7 17,8.23122 17,9.75 L17,11.25 L19.5,11.25 L19.5,6.25 C19.5,5.2835 18.7165,4.5 17.75,4.5 L12.75,4.5 L12.75,7 L11.25,7 L11.25,11.25 L7,11.25 L7,12.75 L4.5,12.75 L4.5,17.75 C4.5,18.7165 5.2835,19.5 6.25,19.5 L11.25,19.5 L11.25,17 L9.75,17 C8.23122,17 7,15.7688 7,14.25 L7,12.75 L11.25,12.75 L11.25,17 L12.75,17 L12.75,12.75 L17,12.75 L17,11.25 L12.75,11.25 L12.75,7 L14.25,7 Z M19.5,12.75 L17,12.75 L17,14.25 C17,15.7688 15.7688,17 14.25,17 L12.75,17 L12.75,19.5 L17.75,19.5 C18.7165,19.5 19.5,18.7165 19.5,17.75 L19.5,12.75 Z M11.25,4.5 L6.25,4.5 C5.2835,4.5 4.5,5.2835 4.5,6.25 L4.5,6.25 L4.5,11.25 L7,11.25 L7,9.75 C7,8.23122 8.23122,7 9.75,7 L9.75,7 L11.25,7 L11.25,4.5 Z",
    id: "\uD83C\uDFA8-Color"
  }, " "), " "), " "), " ")),
  category: 'zealblocks',
  attributes: {
    /** Repeater Array containing Image, Description, and VideoURL */
    items: {
      type: 'array',
      default: []
    },
    /** Enable Disable option for FancyApp Lightbox */
    fancyBoxEnabled: {
      type: 'boolean',
      default: false
    },
    /** Video Option enable disable for Field */
    videoOptionEnabled: {
      type: 'boolean',
      default: false
    },
    /** Selection for Column Count 1 to 5 */
    gridItem: {
      type: 'number',
      default: 3
    },
    /** Selected Image thumbnail size */
    selectedSize: {
      type: 'string'
    },
    uniqueGallery: {
      type: 'string',
      default: ''
    }
  },
  /**
   * Main Editor Structure 
   * @param {*} props
   *  
   * @returns void
   */
  edit: function (props) {
    /** Constant values to contain default values */
    const {
      attributes,
      setAttributes
    } = props;
    const {
      fancyBoxEnabled
    } = attributes;
    const {
      videoOptionEnabled
    } = attributes;
    const {
      gridItem
    } = attributes;
    const {
      uniqueGallery
    } = attributes;
    const {
      selectedSize
    } = attributes;

    /** upload image trigger after row Added javaScript function */
    const gmfgb_upload_image_trigger_after_row_added = numberLenth => {
      setTimeout(function () {
        const buttonElement = document.getElementById('upload-image-' + numberLenth);
        if (buttonElement) {
          buttonElement.click();
        }
      }, 100);
    };

    /** Add repeater item */
    const gmfgb_add_repeater_item = () => {
      const newItems = [...attributes.items, {
        image: null,
        image_caption: '',
        selectedVideoType: 'mp4',
        video_media: null,
        popup_url: ''
      }];
      setAttributes({
        items: newItems
      });
      const numberLenth = newItems.length - 1;
      gmfgb_upload_image_trigger_after_row_added(numberLenth);
    };

    /** Delete Repeater Row */
    const gmfgb_delete_repeater_item = index => {
      const newItems = [...attributes.items];
      newItems.splice(index, 1);
      setAttributes({
        items: newItems
      });
    };

    /** update Repeater data */
    const gmfgb_update_repeater_item = (image, image_caption, selectedVideoType, video_media, popup_url, index) => {
      const newItems = [...attributes.items];
      newItems[index].image = image;
      newItems[index].image_caption = image_caption;
      newItems[index].selectedVideoType = selectedVideoType;
      newItems[index].video_media = video_media;
      newItems[index].popup_url = popup_url;
      setAttributes({
        items: newItems
      });
    };
    if (uniqueGallery === '') {
      setAttributes({
        uniqueGallery: Math.random().toString(36).substring(7)
      });
    }

    /** get thumbnail image sizes from wordpress */
    const imageSizes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.select)('core/editor').getEditorSettings().imageSizes.map(size => size.slug);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, {
      key: "setting"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, {
      title: "MediaGrid Settings"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Enable Fancybox', 'grid-masonry-for-guten-blocks'),
      checked: fancyBoxEnabled,
      onChange: newIsfancyBoxEnabled => setAttributes({
        fancyBoxEnabled: newIsfancyBoxEnabled
      }),
      className: "custom-label"
    }), fancyBoxEnabled ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Enable Video Options', 'grid-masonry-for-guten-blocks'),
      checked: videoOptionEnabled,
      onChange: newVideoOptionEnabled => setAttributes({
        videoOptionEnabled: newVideoOptionEnabled
      }),
      className: "custom-label"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
      className: "blocks-base-control__label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Fancybox Video Options, Please hover Media Image to upload or add Video', 'grid-masonry-for-guten-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null)) : '', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select Image Size', 'grid-masonry-for-guten-blocks'),
      value: selectedSize,
      options: imageSizes.map(size => ({
        label: size,
        value: size
      }))
      //onChange={(onSelectImageSize) => setSize(onSelectImageSize)}
      //onChange={handleSizeChange}
      ,
      onChange: newSelectedSize => setAttributes({
        selectedSize: newSelectedSize
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
      className: "custom-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select Grid Items', 'grid-masonry-for-guten-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.RangeControl, {
      value: gridItem,
      onChange: newGridItem => setAttributes({
        gridItem: newGridItem
      }),
      min: 1,
      max: 5
    }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps.save({
        className: `alignwide gmfgb-mg-grid grid-size-${gridItem} ${fancyBoxEnabled ? 'hasfancy' : ''}`
      })
    }, attributes.items.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gmfgb-mg-wrap",
      key: index
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
      className: "remove-item",
      onClick: () => gmfgb_delete_repeater_item(index)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      fill: "#ff0000",
      width: "20",
      id: "Capa_1",
      viewBox: "0 0 482.428 482.429"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_bgCarrier",
      "stroke-width": "0"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_tracerCarrier",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_iconCarrier"
    }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098 c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117 h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828 C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879 C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096 c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266 c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979 V115.744z"
    }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"
    }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"
    }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07 c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"
    }), " "), " "), " "))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUpload, {
      onSelect: image => gmfgb_update_repeater_item(image, item.image_caption, item.selectedVideoType, item.video_media, item.popup_url, index)
      //ref={mediaUploadRef[index]}
      //ref={buttonRef}
      ,
      allowedTypes: ['image'],
      value: item.image && item.image.id,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gmfgb-mg-image"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
        id: `upload-image-${index}`,
        className: `change-image upload-image-${index}`,
        onClick: open
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
        id: "SVGRepo_bgCarrier",
        "stroke-width": "0"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
        id: "SVGRepo_tracerCarrier",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
        id: "SVGRepo_iconCarrier"
      }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M14.2639 15.9376L12.5958 14.2835C11.7909 13.4852 11.3884 13.0861 10.9266 12.9402C10.5204 12.8119 10.0838 12.8166 9.68048 12.9537C9.22188 13.1096 8.82814 13.5173 8.04068 14.3327L4.04409 18.2802M14.2639 15.9376L14.6053 15.5991C15.4112 14.7999 15.8141 14.4003 16.2765 14.2544C16.6831 14.1262 17.12 14.1312 17.5236 14.2688C17.9824 14.4252 18.3761 14.834 19.1634 15.6515L20 16.4936M14.2639 15.9376L18.275 19.9566M18.275 19.9566C17.9176 20.0001 17.4543 20.0001 16.8 20.0001H7.2C6.07989 20.0001 5.51984 20.0001 5.09202 19.7821C4.71569 19.5904 4.40973 19.2844 4.21799 18.9081C4.12796 18.7314 4.07512 18.5322 4.04409 18.2802M18.275 19.9566C18.5293 19.9257 18.7301 19.8728 18.908 19.7821C19.2843 19.5904 19.5903 19.2844 19.782 18.9081C20 18.4803 20 17.9202 20 16.8001V16.4936M12.5 4L7.2 4.00011C6.07989 4.00011 5.51984 4.00011 5.09202 4.21809C4.71569 4.40984 4.40973 4.7158 4.21799 5.09213C4 5.51995 4 6.08 4 7.20011V16.8001C4 17.4576 4 17.9222 4.04409 18.2802M20 11.5V16.4936M14 10.0002L16.0249 9.59516C16.2015 9.55984 16.2898 9.54219 16.3721 9.5099C16.4452 9.48124 16.5146 9.44407 16.579 9.39917C16.6515 9.34859 16.7152 9.28492 16.8425 9.1576L21 5.00015C21.5522 4.44787 21.5522 3.55244 21 3.00015C20.4477 2.44787 19.5522 2.44787 19 3.00015L14.8425 7.1576C14.7152 7.28492 14.6515 7.34859 14.6009 7.42112C14.556 7.4855 14.5189 7.55494 14.4902 7.62801C14.4579 7.71033 14.4403 7.79862 14.4049 7.97518L14 10.0002Z",
        stroke: "#000000",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), " "))), item.image && selectedSize && item.image.sizes[selectedSize] ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: item.image.sizes[selectedSize].url,
        alt: item.image.alt ? item.image.alt : ''
      }) : item.image ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: item.image.sizes.medium.url,
        alt: item.image.alt ? item.image.alt : ''
      }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _placeholder_image_png__WEBPACK_IMPORTED_MODULE_3__,
        alt: ""
      }))
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gmfgb-mg-content"
    }, item.image &&
    //item.checkboxx &&
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextareaControl, {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Image Caption', 'grid-masonry-for-guten-blocks'),
      className: "gmfgb-mg-image-caption",
      value: item.image_caption ? item.image_caption : item.image.caption,
      onChange: image_caption => gmfgb_update_repeater_item(item.image, image_caption, item.selectedVideoType, item.video_media, item.popup_url, index)
    }), videoOptionEnabled && fancyBoxEnabled ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.SelectControl, {
      value: item.selectedVideoType
      //options={imageSizes.map((size) => ({ label: size, value: size }))}
      //onChange={(onSelectImageSize) => setSize(onSelectImageSize)}
      //onChange={handleSizeChange}
      //onChange={(newSelectedSize) => setAttributes({ selectedSize: newSelectedSize })}
      ,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Upload Video', 'grid-masonry-for-guten-blocks'),
        value: 'mp4'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Video URL', 'grid-masonry-for-guten-blocks'),
        value: 'thirdparty'
      }]
      // options={[
      //     { label: 'Upload Video', value: 'mp4' },
      //     { label: 'Video URL', value: 'thirdparty' },
      // ]}
      ,
      onChange: selectedVideoType => gmfgb_update_repeater_item(item.image, item.image_caption, selectedVideoType, item.video_media, item.popup_url, index)
    }), item.selectedVideoType === 'mp4' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaUpload, {
      onSelect: video_media => gmfgb_update_repeater_item(item.image, item.image_caption, item.selectedVideoType, video_media, item.popup_url, index)
      //ref={mediaUploadRef[index]}
      ,
      allowedTypes: ['video'],
      value: item.video_media,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gmfgb-mg-video"
      }, item.video_media && item.video_media.filename ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.video_media.filename), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
        className: "upload-video-btn",
        onClick: open
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        viewBox: "0 0 20 14",
        fill: "none"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M14 5L16.5768 3.45392C17.3699 2.97803 17.7665 2.74009 18.0928 2.77051C18.3773 2.79703 18.6369 2.944 18.806 3.17433C19 3.43848 19 3.90095 19 4.8259V9.1741C19 10.099 19 10.5615 18.806 10.8257C18.6369 11.056 18.3773 11.203 18.0928 11.2295C17.7665 11.2599 17.3699 11.022 16.5768 10.5461L14 9M4.2 13H10.8C11.9201 13 12.4802 13 12.908 12.782C13.2843 12.5903 13.5903 12.2843 13.782 11.908C14 11.4802 14 10.9201 14 9.8V4.2C14 3.0799 14 2.51984 13.782 2.09202C13.5903 1.71569 13.2843 1.40973 12.908 1.21799C12.4802 1 11.9201 1 10.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2V9.8C1 10.9201 1 11.4802 1.21799 11.908C1.40973 12.2843 1.71569 12.5903 2.09202 12.782C2.51984 13 3.07989 13 4.2 13Z",
        stroke: "black",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M7.5 8.75C7.5 8.61193 7.61193 8.5 7.75 8.5H8.75H9.75C9.88808 8.5 10 8.61193 10 8.75C10 8.88808 9.88808 9 9.75 9H8.75H7.75C7.61193 9 7.5 8.88808 7.5 8.75Z",
        fill: "black"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M9.6934 5.52498C10.0959 5.12095 10.0788 4.59038 9.77825 4.26546C9.6317 4.10702 9.42315 4.00582 9.18693 4.00024C8.94983 3.99464 8.70418 4.08532 8.4775 4.27496C8.4717 4.27981 8.46613 4.28492 8.4608 4.29028L5.21862 7.5454C5.07861 7.68595 5 7.87628 5 8.07468V8.49805C5 8.77343 5.22299 9 5.50096 9H5.92066C6.12009 9 6.31131 8.92058 6.45205 8.77928L9.6934 5.52498ZM8.80178 4.94824C8.70415 4.85061 8.54585 4.85061 8.44823 4.94824C8.3506 5.04587 8.3506 5.20416 8.44823 5.30179L8.69823 5.55179C8.79585 5.64942 8.95415 5.64942 9.05178 5.55179C9.1494 5.45416 9.1494 5.29587 9.05178 5.19824L8.80178 4.94824Z",
        fill: "black"
      })))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Upload', 'grid-masonry-for-guten-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
        className: "upload-video-btn",
        onClick: open
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        viewBox: "0 0 20 14",
        fill: "none"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M7.5 4V10M4.5 7H10.5M14 5L16.5768 3.45392C17.3699 2.97803 17.7665 2.74009 18.0928 2.77051C18.3773 2.79703 18.6369 2.944 18.806 3.17433C19 3.43848 19 3.90095 19 4.8259V9.1741C19 10.099 19 10.5615 18.806 10.8257C18.6369 11.056 18.3773 11.203 18.0928 11.2295C17.7665 11.2599 17.3699 11.022 16.5768 10.5461L14 9M4.2 13H10.8C11.9201 13 12.4802 13 12.908 12.782C13.2843 12.5903 13.5903 12.2843 13.782 11.908C14 11.4802 14 10.9201 14 9.8V4.2C14 3.0799 14 2.51984 13.782 2.09202C13.5903 1.71569 13.2843 1.40973 12.908 1.21799C12.4802 1 11.9201 1 10.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2V9.8C1 10.9201 1 11.4802 1.21799 11.908C1.40973 12.2843 1.71569 12.5903 2.09202 12.782C2.51984 13 3.07989 13 4.2 13Z",
        stroke: "black",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      })))))
    })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.TextControl
    //label="Video Popup URL"
    , {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Youtube/Vimeo URL', 'grid-masonry-for-guten-blocks'),
      className: "gmfgb-mg-popup-video",
      value: item.popup_url,
      onChange: popup_url => gmfgb_update_repeater_item(item.image, item.image_caption, item.selectedVideoType, item.video_media, popup_url, index)
    })) : '')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      class: "gmfgb-mg-button button button-primary button-large",
      onClick: gmfgb_add_repeater_item
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "50",
      viewBox: "0 0 32 32",
      fill: "#000000"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_bgCarrier",
      "stroke-width": "0"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_tracerCarrier",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "SVGRepo_iconCarrier"
    }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "plus"), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("desc", null, "Created with Sketch Beta."), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, " "), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "Page-1",
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "Icon-Set-Filled",
      transform: "translate(-362.000000, -1037.000000)",
      fill: "#000000"
    }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049",
      id: "plus"
    }, " "), " "), " "), " ")))));
  },
  /**
   * Main Save Structure
   * @param {*} param0 
   * @returns 
   */
  save: function ({
    attributes
  }) {
    /** Get constant values contains values to save */
    const {
      fancyBoxEnabled
    } = attributes;
    const {
      videoOptionEnabled
    } = attributes;
    const {
      uniqueGallery
    } = attributes;
    const {
      gridItem
    } = attributes;
    return /** Structure to show for update data */(
      (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
        ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps.save({
          className: `alignwide gmfgb-mg-grid grid-size-${gridItem} ${fancyBoxEnabled ? 'hasfancy' : ''}`
        })
      }, " ", attributes.items.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "gmfgb-mg-media",
        key: index
      }, item.image && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, fancyBoxEnabled ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, videoOptionEnabled ? /** have Video available and also enabled the video popup from the side panel */
      item.selectedVideoType === 'thirdparty' && item.popup_url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: item.popup_url,
        data: item.selectedVideoType,
        className: "gmfgb-mg-video t",
        "data-fancybox": `video-gallery-${uniqueGallery}`,
        "data-caption": item.image_caption ? item.image_caption : item.image.caption,
        "data-fancy-class": `gallery-${uniqueGallery}`
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "34.875",
        height: "34.875",
        viewBox: "0 0 34.875 34.875"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        id: "Icon_awesome-play-circle",
        "data-name": "Icon awesome-play-circle",
        d: "M18,.563A17.438,17.438,0,1,0,35.438,18,17.434,17.434,0,0,0,18,.563Zm8.135,19.125-12.375,7.1a1.691,1.691,0,0,1-2.51-1.477V10.688a1.692,1.692,0,0,1,2.51-1.477l12.375,7.523A1.693,1.693,0,0,1,26.135,19.688Z",
        transform: "translate(-0.563 -0.563)"
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: item.image.sizes.full.url,
        alt: item.image.alt ? item.image.alt : ''
      })) : item.selectedVideoType === 'mp4' && item.video_media && item.video_media.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: item.video_media.url,
        data: item.selectedVideoType,
        className: "gmfgb-mg-video s",
        "data-fancybox": `video-gallery-${uniqueGallery}`,
        "data-caption": item.image_caption ? item.image_caption : item.image.caption
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "34.875",
        height: "34.875",
        viewBox: "0 0 34.875 34.875"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        id: "Icon_awesome-play-circle",
        "data-name": "Icon awesome-play-circle",
        d: "M18,.563A17.438,17.438,0,1,0,35.438,18,17.434,17.434,0,0,0,18,.563Zm8.135,19.125-12.375,7.1a1.691,1.691,0,0,1-2.51-1.477V10.688a1.692,1.692,0,0,1,2.51-1.477l12.375,7.523A1.693,1.693,0,0,1,26.135,19.688Z",
        transform: "translate(-0.563 -0.563)"
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: item.image.sizes.full.url,
        alt: item.image.alt ? item.image.alt : ''
      })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: item.image.sizes.full.url,
        "data-fancybox": `video-gallery-${uniqueGallery}`,
        "data-caption": item.image_caption ? item.image_caption : item.image.caption
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: item.image.sizes.full.url,
        alt: item.image.alt ? item.image.alt : ''
      })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: item.image.sizes.full.url,
        "data-fancybox": `video-gallery-${uniqueGallery}`,
        "data-caption": item.image_caption ? item.image_caption : item.image.caption
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: item.image.sizes.full.url,
        alt: item.image.alt ? item.image.alt : ''
      }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: item.image.sizes.full.url,
        alt: item.image.alt ? item.image.alt : ''
      })), (item.image_caption || item.image.caption) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "image-caption"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, item.image_caption ? item.image_caption : item.image.caption))))))
    );
  }
});

/***/ }),

/***/ "./src/block/post-grid/post-grid.js":
/*!******************************************!*\
  !*** ./src/block/post-grid/post-grid.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/block/post-grid/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/block/post-grid/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Import Styles 
 */



/**
 * WordPress dependencies
 */





/** Post Template */
const POST_GRID_TEMPLATE = [/** Additional Heading and Description */
['core/group', {
  className: 'gmfgb-pg-title',
  style: {
    border: {
      style: 'solid',
      width: '0',
      radius: '0',
      color: '#dcdcdc'
    }
  }
}, [['core/paragraph', {
  className: 'gmfgb-pg-sub-heading',
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Your amazing blog posts', 'grid-masonry-for-guten-blocks'),
  align: 'center',
  style: {
    typography: {
      fontSize: '16px',
      fontWeight: 700,
      textTransform: 'uppercase'
    },
    spacing: {
      margin: {
        bottom: '15px',
        top: '0px',
        right: '0px',
        left: '0px'
      }
    }
  }
}], ['core/heading', {
  className: 'gmfgb-pg-main-heading',
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Create a Quick and Easy Post Grid', 'grid-masonry-for-guten-blocks'),
  textAlign: 'center',
  style: {
    typography: {
      fontWeight: 700
    },
    spacing: {
      margin: {
        bottom: '25px',
        top: '0px',
        right: '0px',
        left: '0px'
      }
    }
  }
}]]], /** Main Post Loop/Query with Default Wordpress Posts */
['core/query', {
  className: 'gmfgb-pg-loop-wrap',
  query: {
    inherit: false,
    offset: 0,
    postType: 'post',
    enhancedPagination: true
  },
  templateLock: true,
  displayLayout: false,
  align: false
}, [['core/post-template', {
  templateLock: true,
  layout: false,
  displayLayout: false,
  align: false
}, [['core/group', {
  className: 'gmfgb-pg-wrap',
  style: {
    border: {
      style: 'solid',
      width: '0',
      radius: '0',
      color: '#dcdcdc'
    },
    templateLock: true
  }
}, [['core/post-featured-image', {
  className: 'gmfgb-pg-featured-img',
  style: {
    width: '100%',
    height: '100%',
    spacing: {
      margin: {
        bottom: '0px',
        top: '0px',
        right: '0px',
        left: '0px'
      }
    }
  }
}], ['core/group', {
  className: 'gmfgb-pg-content',
  style: {
    spacing: {
      padding: {
        top: '100px',
        right: '25px',
        bottom: '25px',
        left: '25px'
      },
      margin: {
        top: '0px',
        bottom: '0px'
      }
    }
  }
}, [
// [ 'core/categories' ],
['core/post-title', {
  className: 'gmfgb-pg-title',
  style: {
    color: {
      text: '#ffffff'
    },
    typography: {
      fontSize: '20px',
      fontWeight: 700
    },
    spacing: {
      margin: {
        bottom: '15px',
        top: '15px',
        right: '0px',
        left: '0px'
      }
    }
  }
}], ['core/post-excerpt', {
  excerptLength: 20,
  moreText: '&nbsp;',
  className: 'gmfgb-pg-description',
  style: {
    typography: {
      lineHeight: 1.2
    },
    color: {
      text: '#ffffff'
    },
    spacing: {
      margin: {
        top: '0',
        bottom: '20px',
        left: '0',
        right: '0'
      }
    }
  }
}], ['core/read-more', {
  className: 'gmfgb-pg-link',
  content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Read More →', 'grid-masonry-for-guten-blocks'),
  style: {
    color: {
      text: '#ffffff'
    },
    typography: {
      textDecoration: 'underline',
      fontSize: '16px'
    },
    spacing: {
      margin: {
        'top': '0',
        'bottom': '20px',
        'left': '0',
        'right': '0'
      }
    }
  }
}], ['core/group', {
  className: 'gmfgb-pg-date-wrap',
  style: {
    spacing: {
      padding: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0'
      },
      margin: {
        top: '0px',
        bottom: '0px'
      }
    }
  }
}, [['core/post-date', {
  className: 'gmfgb-pg-date',
  style: {
    spacing: {
      margin: '0'
    },
    color: {
      text: '#ffffff'
    },
    typography: {
      fontSize: '13px'
    }
  }
}], ['core/post-author', {
  className: 'gmfgb-pg-author',
  style: {
    typography: {
      fontSize: '13px'
    },
    spacing: {
      'margin': '0'
    }
  }
}]]]]]]]]], ['core/query-pagination', {
  className: 'post-pagination'
}]]], ['core/group', {
  className: 'gmfgb-pg-cta-button'
}, [['core/buttons', {
  layout: {
    type: 'flex',
    justifyContent: 'center'
  },
  style: {
    spacing: {
      margin: {
        top: '25px'
      }
    }
  }
}, [['core/button', {
  text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Read All Posts', 'grid-masonry-for-guten-blocks')
}]]]]]];

/**
 * Post Grid block registration
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('grid-masonry-for-guten-blocks/post-grid', {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Post Grid', 'grid-masonry-for-guten-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('An advanced block that allows displaying post types based on different query parameters and visual configurations.', 'grid-masonry-for-guten-blocks'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#000000"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "SVGRepo_tracerCarrier",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "SVGRepo_iconCarrier"
  }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 9.999V20a1 1 0 0 1-1 1h-8V9.999h9zm-11 6V21H3a1 1 0 0 1-1-1v-4.001h9zM11 3v10.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v3.999h-9V3h8z"
  }), " "), " ")),
  category: 'zealblocks',
  example: {},
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('post-list', 'grid-masonry-for-guten-blocks'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Post Listing', 'grid-masonry-for-guten-blocks')],
  supports: {
    displayLayout: true,
    layout: true,
    align: true
  },
  attributes: {
    align: {
      type: 'string',
      default: 'wide'
    },
    gridItem: {
      type: 'number',
      default: 2
    }
  },
  //onChange: sliderIsUpdated(),
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      gridItem
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, {
      key: "setting"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('PostGrid Settings', 'grid-masonry-for-guten-blocks')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
      className: "custom-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select Grid Items', 'grid-masonry-for-guten-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
      value: gridItem,
      onChange: newGridItem => setAttributes({
        gridItem: newGridItem
      }),
      min: 1,
      max: 3
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
        className: `gmfgb-pg-grid grid-size-${gridItem}`,
        templateLock: true
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks, {
      template: POST_GRID_TEMPLATE
    })));
  },
  save: ({
    attributes
  }) => {
    const {
      gridItem
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps.save({
        className: `gmfgb-pg-grid gmfgb-grid grid-size-${gridItem}`
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_post_grid_post_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/post-grid/post-grid.js */ "./src/block/post-grid/post-grid.js");
/* harmony import */ var _block_media_grid_media_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block/media-grid/media-grid.js */ "./src/block/media-grid/media-grid.js");



/***/ }),

/***/ "./src/block/media-grid/editor.scss":
/*!******************************************!*\
  !*** ./src/block/media-grid/editor.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block/media-grid/style.scss":
/*!*****************************************!*\
  !*** ./src/block/media-grid/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block/post-grid/editor.scss":
/*!*****************************************!*\
  !*** ./src/block/post-grid/editor.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block/post-grid/style.scss":
/*!****************************************!*\
  !*** ./src/block/post-grid/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block/media-grid/placeholder-image.png":
/*!****************************************************!*\
  !*** ./src/block/media-grid/placeholder-image.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/placeholder-image.9bffabc8.png";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkgrid_masonry_for_guten_blocks"] = globalThis["webpackChunkgrid_masonry_for_guten_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map