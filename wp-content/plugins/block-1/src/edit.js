
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import { TextControl, Button } from "@wordpress/components";
import {
	MediaPlaceholder,
	MediaUploadCheck,
	MediaUpload,
} from "@wordpress/block-editor";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {

	const handleAddRow = () => {
		const newRows = [...props.attributes.repeater_field];
		newRows.push({ image_upload: "", video_upload: "" });
		props.setAttributes({ repeater_field: newRows });
	};

	const handleRemoveRow = (index) => {
		const newRows = [...props.attributes.repeater_field];
		newRows.splice(index, 1);
		props.setAttributes({ repeater_field: newRows });
	};

	const handleImageUpload = (index, url) => {
		const newRows = [...props.attributes.repeater_field];
		newRows[index].image_upload = url;
		props.setAttributes({ repeater_field: newRows });
	};

	const handleVideoUpload = (index, url) => {
		const newRows = [...props.attributes.repeater_field];
		newRows[index].video_upload = url;
		props.setAttributes({ repeater_field: newRows });
	};

	return (
		// <p { ...useBlockProps() }>
		// 	{ __(` Block 1 –${props.attributes.messages}!`, 'block-1' ) }
		// </p>

		<div {...useBlockProps()}>
			<TextControl
				label="Enter Your Name : "
				className="form-control"
				type="text"
				value={props.attributes.messages}
				onChange={(value) => props.setAttributes({ messages: value })}
			/>
			{/* Repeation field */}
			{props.attributes.repeater_field.map((row, index) => (
				<div key={index}>
					{/* Image Upload  */}
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => handleImageUpload(index, media.url)}
							allowedTypes={["image"]}
							value={row.image_upload}
							render={({ open }) => (
								<div>
									<Button onClick={open}>
										{row.image_upload ? "Change Image" : "Upload Image"}
									</Button>
									{!row.image_upload ? (
										<MediaPlaceholder
											icon="format-image"
											onSelect={open}
											onSelectURL={(url) => handleImageUpload(index, url)}
											allowedTypes={["image"]}
											labels={{
												title: __("Image", "your-plugin"),
											}}
										/>
									) : (
										<div>
											<img
												src={row.image_upload}
												alt="Uploaded Image"
												style={{ maxWidth: "100%" }}
											/>
											<Button
												isDestructive
												onClick={() => handleImageUpload(index, "")}
											>
												Remove Image
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>

					{/* Video Upload */}
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => handleVideoUpload(index, media.url)}
							allowedTypes={["video"]}
							value={row.video_upload}
							render={({ open }) => (
								<div>
								<Button onClick={open}>
										{row.video_upload ? "Change Video" : "Upload Video"}
									</Button>
									{!row.video_upload ? (
										<MediaPlaceholder
											icon="video-alt3"
											onSelect={open}
											onSelectURL={(url) => handleVideoUpload(index, url)}
											allowedTypes={["video"]}
											labels={{
												title: __("Video", "your-plugin"),
											}}
										/>
									) : (
										<div>
											<video
												src={row.video_upload}
												controls
												width="300"
												height="auto"
											>
												Your browser does not support the video tag.
											</video>
											<Button
												isDestructive
												onClick={() => handleVideoUpload(index, "")}
											>
												Remove Video
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>

					<Button onClick={() => handleRemoveRow(index)}>Remove</Button>
				</div>
			))}
			<Button onClick={handleAddRow}>Add Row</Button>
		</div>
	);
}