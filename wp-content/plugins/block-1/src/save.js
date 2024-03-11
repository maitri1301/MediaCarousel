
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

export default function save(props) {
    const { messages, repeater_field } = props.attributes;

    return (
        <div { ...useBlockProps.save() }>
            <p>{ `Block 1 – ${messages}!` }</p>

            {repeater_field && repeater_field.map((row, index) => (
                <div key={index}>
                    {row.image_upload && <img src={row.image_upload} alt="Uploaded Image" style={{ maxWidth: '100%' }} />}
                    {row.video_upload && (
                        <video src={row.video_upload} controls width="300" height="auto">
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            ))}
        </div>
    );
}





