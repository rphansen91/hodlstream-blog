import React from "react"
import SEO from "../ui/SEO"
import Layout from "../ui/Layout"
import Check from "@material-ui/icons/Check"
import ContentLayout from "../components/layout"
import ArticleSidebar from "../ui/Article/Sidebar"
import { BottomBannerDisplayAd } from "../ads/slots"

export default function Crypto101LongForm() {
  return (
    <ContentLayout>
      <SEO
        schema="Article"
        title="Hodl Stream | Crypto Revolution: Bitcoin, Cryptocurrency and the Future of Money"
        description="Forget everything you think you know about Bitcoin and follow Johnny on his journey as he explores the extraordinary worlds of cryptocurrency and blockchain technology. You’ll discover the fundamentals of this technology and gain an understanding of basic market cycles while experiencing the range of emotions felt between euphoric market highs and anxious market lows."
        path="/crypto-revolution"
        images="/products/crypto-revolution.jpg"
      />
      <div>
        <Layout
          sidebar={<ArticleSidebar />}
          content={
            <>
              <Section className="row py-5">
                <div className="col-12 text-center mb-2 px-3">
                  <h1>
                    Crypto Revolution: Bitcoin, Cryptocurrency and the Future of
                    Money
                  </h1>
                </div>
                <div className="col-12 col-md-4 offset-md-2 text-center mb-4 mb-md-0">
                  <BuyNowCard />
                </div>
                <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li>
                      <Check /> How to set up your own crypto wallet
                    </li>
                    <li>
                      <Check /> How to buy, sell and safeguard your
                      cryptocurrency
                    </li>
                    <li>
                      <Check /> Which crypto exchanges Sam has vetted and
                      prefers to work with
                    </li>
                    <li>
                      <Check /> How the technology behind crypto – blockchain –
                      has brought to life thousands of new start up businesses
                    </li>
                    <li>
                      <Check /> And how crypto has forever altered the financial
                      and technological landscape...
                    </li>
                  </ul>
                  <p>
                    In under a decade, cryptos like bitcoin and ethereum have
                    made headline news…and shot skyward from just a few cents,
                    to thousands of dollars per ‘coin’. And in the process, have
                    birthed a new wave of crypto millionaires.
                  </p>
                </div>
              </Section>
              <Section>
                <div className="col-12 border-bottom mb-4">
                  <h2 className="text-center">Average Consumer Testimonials</h2>
                </div>
                <div className="col-12 offset-md-2 col-md-4">
                  <h4>Extremely Informative ⭐⭐⭐⭐⭐</h4>
                  <p>
                    the author is well versed on this subject and his ability to
                    pass his knowledge on is quiet refreshing. Learnt so much
                    from this book will recommend this book to anyone wanting to
                    learn about the Crypto market.
                  </p>
                  <p>-Sonja-</p>
                </div>
                <div className="col-12 col-md-4">
                  <h4>Extremely Informative ⭐⭐⭐⭐⭐</h4>
                  <p>
                    the author is well versed on this subject and his ability to
                    pass his knowledge on is quiet refreshing. Learnt so much
                    from this book will recommend this book to anyone wanting to
                    learn about the Crypto market.
                  </p>
                  <p>-Sonja-</p>
                </div>
                <div className="col-12 offset-md-2 col-md-4">
                  <h4>Awesome ⭐⭐⭐⭐⭐</h4>
                  <p>
                    Amazing show awesome content really teaches a lot about
                    crypto and Blockchain techcnology. Keep up the good work!!
                  </p>
                  <p>-Shadowboxer87-</p>
                </div>
                <div className="col-12 col-md-4">
                  <h4>Fantastic! ⭐⭐⭐⭐⭐</h4>
                  <p>Exactly what I was looking for</p>
                  <p>-Mandyfeijoo-</p>
                </div>
              </Section>
              <Section>
                <div className="col-12 border-bottom mb-4">
                  <h2 className="text-center">About the Author</h2>
                </div>
                <div className="col-12 col-md-4 offset-md-2">
                  <BuyNowCard />
                </div>
                <div className="col-12 col-md-4">
                  <Author />
                </div>
              </Section>
              <BottomBannerDisplayAd />
            </>
          }
        />
      </div>
    </ContentLayout>
  )
}

const Section = ({ className, children }) => (
  <div className={`row py-5 ${className || ""}`}>{children}</div>
)

const trackCoinConvert = () => {
  if ("ga" in window) {
    window.ga("send", "event", "Affiliate", "click", "Crypto 101")
  }

  window.coinTracker = window.coinTracker || []
  ;(window.coinTracker || []).push({ event: "convert" })
}

// const Video = () => {
//   return (
//     <iframe
//       width="560"
//       height="315"
//       src="https://www.youtube.com/embed/bcSeUyj4JL0"
//       frameborder="0"
//       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//       allowfullscreen
//       style={{ maxWidth: "100%" }}
//     ></iframe>
//   )
// }

const ImageLink = () => {
  return (
    <>
      <a
        className="shadow d-inline-block"
        target="_blank"
        href="https://www.amazon.com/gp/product/B07J16R32G/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07J16R32G&linkCode=as2&tag=hodlstream-20&linkId=0f2ce708d64b3c5820dfef17a64d94cf"
      >
        <img
          border="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07J16R32G&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=hodlstream-20"
        />
      </a>
      <img
        src="//ir-na.amazon-adsystem.com/e/ir?t=hodlstream-20&l=am2&o=1&a=B07J16R32G"
        width="1"
        height="1"
        border="0"
        alt=""
        style={{ border: "none !important", margin: "0px !important;" }}
      />
    </>
  )
}

const BuyNowCard = () => {
  return (
    <div className="card text-center d-inline-block">
      <div className="card-body">
        <ImageLink />
        <h6 className="mt-3 mb-0">
          <TextLink />
        </h6>
      </div>
      <div className="card-footer">
        <BuyNow />
      </div>
    </div>
  )
}

const BuyNow = () => {
  return (
    <>
      <a
        className="btn btn-success"
        onClick={trackCoinConvert}
        target="_blank"
        href="https://www.amazon.com/gp/product/B07J16R32G/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07J16R32G&linkCode=as2&tag=hodlstream-20&linkId=87e0915683543477b177e726ff116ab8"
      >
        <i className="fas fa-shopping-cart"></i> BUY NOW!
      </a>
      <img
        src="//ir-na.amazon-adsystem.com/e/ir?t=hodlstream-20&l=am2&o=1&a=B07J16R32G"
        width="1"
        height="1"
        border="0"
        alt=""
        style={{ border: "none !important", margin: "0px !important;" }}
      />
    </>
  )
}

const TextLink = () => {
  return (
    <>
      <a
        target="_blank"
        className="text-dark"
        onClick={trackCoinConvert}
        href="https://www.amazon.com/gp/product/B07J16R32G/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07J16R32G&linkCode=as2&tag=hodlstream-20&linkId=87e0915683543477b177e726ff116ab8"
      >
        Crypto Revolution: Bitcoin, Cryptocurrency and the Future of Money
      </a>
      <img
        src="//ir-na.amazon-adsystem.com/e/ir?t=hodlstream-20&l=am2&o=1&a=B07J16R32G"
        width="1"
        height="1"
        border="0"
        alt=""
        style={{ border: "none !important", margin: "0px !important;" }}
      />
    </>
  )
}

const Author = () => (
  <div>
    <h6>Written by</h6>
    <h4>Sam Volkering</h4>
    <p>
      Writes about the latest advances and opportunities in cryptocurrencies,
      breakthrough tech and small and microcap stocks. I aim to help investors
      in stocks (locally and globally) and cryptocurrencies make sense of our
      crazy world and profit from investable ideas.
    </p>
  </div>
)
