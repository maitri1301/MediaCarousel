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

/**
 * Main Save Structure
 * @param {*} param0
 * @returns
 */
export default function save(props) {
	/** Get constant values contains values to save */
	const { fancyBoxEnabled } = attributes;
	const { videoOptionEnabled } = attributes;
	const { uniqueGallery } = attributes;
	const { gridItem } = attributes;
	return (
		/** Structure to show for update data */
		<section
			{...useBlockProps.save({
				className: `alignwide gmfgb-mg-grid grid-size-${gridItem} ${
					fancyBoxEnabled ? "hasfancy" : ""
				}`,
			})}
		>
			{" "}
			{/* }//className={`gmfgb-grid grid-size-${gridItem} ${ fancyBoxEnabled ? 'hasfancy' : '' }`}>{*/}
			{attributes.items.map((item, index) => (
				<div className="gmfgb-mg-media" key={index}>
					{item.image && (
						<>
							{fancyBoxEnabled ? (
								<>
									{videoOptionEnabled ? (
										/** have Video available and also enabled the video popup from the side panel */
										item.selectedVideoType === "thirdparty" &&
										item.popup_url ? (
											<a
												href={item.popup_url}
												data={item.selectedVideoType}
												className="gmfgb-mg-video t"
												data-fancybox={`video-gallery-${uniqueGallery}`}
												data-caption={
													item.image_caption
														? item.image_caption
														: item.image.caption
												}
												data-fancy-class={`gallery-${uniqueGallery}`}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="34.875"
													height="34.875"
													viewBox="0 0 34.875 34.875"
												>
													<path
														id="Icon_awesome-play-circle"
														data-name="Icon awesome-play-circle"
														d="M18,.563A17.438,17.438,0,1,0,35.438,18,17.434,17.434,0,0,0,18,.563Zm8.135,19.125-12.375,7.1a1.691,1.691,0,0,1-2.51-1.477V10.688a1.692,1.692,0,0,1,2.51-1.477l12.375,7.523A1.693,1.693,0,0,1,26.135,19.688Z"
														transform="translate(-0.563 -0.563)"
													/>
												</svg>
												<img
													src={item.image.sizes.full.url}
													alt={item.image.alt ? item.image.alt : ""}
												/>
											</a>
										) : item.selectedVideoType === "mp4" &&
										  item.video_media &&
										  item.video_media.url ? (
											<a
												href={item.video_media.url}
												data={item.selectedVideoType}
												className="gmfgb-mg-video s"
												data-fancybox={`video-gallery-${uniqueGallery}`}
												data-caption={
													item.image_caption
														? item.image_caption
														: item.image.caption
												}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="34.875"
													height="34.875"
													viewBox="0 0 34.875 34.875"
												>
													<path
														id="Icon_awesome-play-circle"
														data-name="Icon awesome-play-circle"
														d="M18,.563A17.438,17.438,0,1,0,35.438,18,17.434,17.434,0,0,0,18,.563Zm8.135,19.125-12.375,7.1a1.691,1.691,0,0,1-2.51-1.477V10.688a1.692,1.692,0,0,1,2.51-1.477l12.375,7.523A1.693,1.693,0,0,1,26.135,19.688Z"
														transform="translate(-0.563 -0.563)"
													/>
												</svg>
												<img
													src={item.image.sizes.full.url}
													alt={item.image.alt ? item.image.alt : ""}
												/>
											</a>
										) : (
											<a
												href={item.image.sizes.full.url}
												data-fancybox={`video-gallery-${uniqueGallery}`}
												data-caption={
													item.image_caption
														? item.image_caption
														: item.image.caption
												}
											>
												<img
													src={item.image.sizes.full.url}
													alt={item.image.alt ? item.image.alt : ""}
												/>
											</a>
										)
									) : (
										<a
											href={item.image.sizes.full.url}
											data-fancybox={`video-gallery-${uniqueGallery}`}
											data-caption={
												item.image_caption
													? item.image_caption
													: item.image.caption
											}
										>
											<img
												src={item.image.sizes.full.url}
												alt={item.image.alt ? item.image.alt : ""}
											/>
										</a>
									)}
								</>
							) : (
								<div>
									<img
										src={item.image.sizes.full.url}
										alt={item.image.alt ? item.image.alt : ""}
									/>
								</div>
							)}
							{(item.image_caption || item.image.caption) && (
								<div class="image-caption">
									<p>
										{item.image_caption
											? item.image_caption
											: item.image.caption}
									</p>
								</div>
							)}
						</>
					)}
				</div>
			))}
		</section>
	);
}
