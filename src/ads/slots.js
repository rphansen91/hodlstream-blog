import React from "react";
import Ad from "./Ad";

export const TopBannerDisplayAd = () => (
  <Ad>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
      <ins className="adsbygoogle top-banner-display-ad"
        style={{ display: "inline-block", height: 90, width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
        data-ad-client="ca-pub-7183056818143738"
        data-ad-slot="3387340853"
        data-full-width-responsive="true"></ins>
    </div>
  </Ad>
)

// export const TopBannerDisplayAd = () => (
//   <Ad>
//     <div style={{ display: "block", maxHeight: 120 }}>
//       <ins
//         className="adsbygoogle top-banner-display-ad"
//         style={{ display: "block", height: 95 }}
//         data-ad-client="ca-pub-7183056818143738"
//         data-ad-slot="3387340853"
//         data-ad-format="auto"
//         data-full-width-responsive="true"
//       />
//     </div>
//   </Ad>
// );

export const BottomBannerDisplayAd = () => (
  <Ad>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
      <ins
        className="adsbygoogle bottom-banner-display-ad"
        style={{ display: "inline-block", height: 90, display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}
        data-ad-client="ca-pub-7183056818143738"
        data-ad-slot="9637764870"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  </Ad>
);

export const NewsDisplayAd = ({ style }) => (
  <Ad>
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-7183056818143738"
      data-ad-slot="4394011205"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  </Ad>
);

export const PortfolioBannerAd = ({}) => (
  <Ad>
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7183056818143738"
      data-ad-slot="3292492573"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  </Ad>
);
