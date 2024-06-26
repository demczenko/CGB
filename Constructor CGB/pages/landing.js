import {
  Line,
  Category,
  ThisMayInterestYou,
  Freebies,
  Intro,
  Product,
  Timer,
  GetCode,
  Paragraph,
  Space,
  ImageWithLink,
} from "../components/index.js";
import { priceFree } from "../helpers/index.js";
import { footer } from "../templates/index.js";

// Desktop

export async function landing({
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
  const video = {
    CHDE: "",
    FR: "",
    HU: "",
    IT: "",
    NL: "",
    NO: "",
    PL: "",
    PT: "",
    SE: "",
    SK: "",
    ES: "",
    UK: "",
    CHFR: "",
    AT: "",
    CZ: "",
    DE: "",
    DK: "",
    FI: "",
  };

  return `
 <style>
	.cgbContainer{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.xyCTA{
		text-decoration: none;
		text-decoration: underline;
		text-underline-position: under;
		text-decoration-thickness: 1px;
		font-weight: 500;
		font-size: 20px;
	}
	.xyHeader1{
		font-size: 45px;
		line-height: 1.25;
	}
	.xyHeader3{
		font-size: 20px;
	}

	.textContainer1 {
		padding-left: min(24px, 2vw);
		min-width: 35%;
		flex: 0 1 35%;
	}
	
	@media screen and (max-width: 1200px){
		.xyHeader1{
			font-size: 32px;
		}
		.xyHeader3{
			font-size: 18px;
		}
		.xyCTA{
			font-size: 18px;
		}
	}
	@media screen and (max-width: 800px){
		.xyHeader1{
			font-size: 30px;
		}
		.xyHeader3{
			font-size: 14px;
		}
		.xyCTA{
			font-size: 14px;
		}
	}
	@media screen and (max-width: 650px){
		.xyHeader1{
			font-size: 20px;
		}
	}
</style>
	<div class="cgbContainer" style="background-color:#FFEFDF;">
    <div class="textContainer1">
      <p class="xyHeader1" style="margin: 0 0 12px 0!important;"><span data-order-text="0">${getField(
        translations.cgb,
        "Up to"
      )}</br>${getField(translations.cgb, "All tables")}</span></p>
      <p class="xyHeader3" style="text-decoration: none!important; margin: 0 0 18px 0!important;"><span data-order-text="2">${getField(
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
  <a href="${getCategory(
    "https://www.beliani.ch/outdoor-furniture/garden-tables",
    { origin: false }
  )}"><video style="max-width: 100%;" autoplay="" loop="" muted="" playsinline="" disableremoteplayback="true" ><source src="https://www.pictureserver.net/images/pic/ff/a5/french_src_banner_picid_10454_image.mp4?ver=2" type="video/mp4"></video></a>
</div>
`;
}
