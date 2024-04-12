import {
  Line,
  Category,
  GetCode,
  Intro,
  Paragraph,
  ImageWithLink,
  Space,
  Freebies,
  Product,
  ProductWithSize,
} from "../components/index.js";
import { priceFree } from "../helpers/index.js";
import { footer, header } from "../templates/index.js";

// Mobile

export async function newsletter({
  links,
  getProductFromServer,
  getProductByName,
  getProductById,
  getCategory,
  translations,
  id,
  origin,
  country,
  template,
  getField,
}) {
  return `
  <style>
	.xyzGridContainer {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		align-content: center;
		align-items: center;
		padding-left: 25px;
	}

  .xyzGridContainer a{
    color: #000000 !important;
	}

	.xyCTA {
		text-decoration: underline;
		text-underline-position: under;
		text-decoration-thickness: 1px;
		font-weight: 500;
		font-size: 12px;
	}

	.xyHeader1 {
		font-size: 26px;
		line-height: 36px;
	}
	.xyHeader3 {
		font-size: 12px;
	}
</style>
<div class="xyzGridContainer" style="background-color:#FFEFDF;">
	<div style="padding: 10px 5px 5px 0px;">
		<p class="xyHeader1" style="margin: 0 0 5px 0!important;"><span data-order-text="0">${getField(
      translations.cgb,
      "Up to"
    )}</br>${getField(translations.cgb, "All tables")}</span></p>
		<p class="xyHeader3" style="text-decoration: none!important; margin: 0 0 5px 0!important;"><span data-order-text="2">${getField(
      translations.cgb,
      "Until"
    )}</span></p>
		<a href="${getCategory(
      "https://www.beliani.ch/outdoor-furniture/garden-tables",
      { origin: false }
    )}"><p class="xyCTA" style="margin: 0!important;"><span data-order-text="3">${getField(
    translations.cgb,
    "Cta"
  )}</span></p></a>
	</div>
	<div>
		<a href="${getCategory(
      "https://www.beliani.ch/outdoor-furniture/garden-tables",
      { origin: false }
    )}"><video style="display: block" playsinline autoplay loop muted disableremoteplayback=true width="100%">
			<source
				src="https://www.pictureserver.net/images/pic/4e/22/italian_src_mobilebanner_picid_10454_x_480_image.mp4?ver=5"
				type="video/mp4">
		</video></a>
	</div>
</div>

    `;
}
