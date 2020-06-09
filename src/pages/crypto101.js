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
        title="Hodl Stream | Crypto 101: Johhny's Guide to Cryptocurrency"
        description="Forget everything you think you know about Bitcoin and follow Johnny on his journey as he explores the extraordinary worlds of cryptocurrency and blockchain technology. You’ll discover the fundamentals of this technology and gain an understanding of basic market cycles while experiencing the range of emotions felt between euphoric market highs and anxious market lows."
        path="/crypto101"
        images="/products/crypto101.jpg"
      />
      <div className="container-fluid">
        <div className="row bg-dark text-white pt-5">
          <div className="col-12 col-md-5 offset-md-1 text-center d-flex justify-content-center flex-column mb-5">
            <h2 style={{ marginBottom: '0.3rem' }}>
              Immerse yourself and learn lessons that cost others many thousands
              of dollars.
            </h2>
            <div>
              <BuyNow />
            </div>
          </div>
          <div className="col-12 col-md-5 px-0 px-md-3 mb-md-5 text-center">
            <Video />
          </div>
        </div>
        <Layout
          sidebar={<ArticleSidebar />}
          content={
            <>
              <Section className="row py-5">
                <div className="col-12 col-md-4 offset-md-2 text-center mb-4 mb-md-0">
                  <BuyNowCard />
                </div>
                <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li>
                      <Check /> A Fun Story for All
                    </li>
                    <li>
                      <Check /> Interactive Design
                    </li>
                    <li>
                      <Check /> Easy to Read and Understand
                    </li>
                    <li>
                      <Check /> 100+ Defined terms and glossary
                    </li>
                    <li>
                      <Check /> A Great Gift for Friends
                    </li>
                  </ul>
                  <p>
                    Forget everything you think you know about Bitcoin and
                    follow Johnny on his journey as he explores the
                    extraordinary worlds of cryptocurrency and blockchain
                    technology. You’ll discover the fundamentals of this
                    technology and gain an understanding of basic market cycles
                    while experiencing the range of emotions felt between
                    euphoric market highs and anxious market lows.
                  </p>
                </div>
              </Section>
              <Section>
                <div className="col-12 border-bottom mb-4">
                  <h2 className="text-center">About the Author</h2>
                </div>
                <div className="col-12 col-md-4 offset-md-2">
                  <Author />
                </div>
                <div className="col-12 col-md-4">
                  <Illustrator />
                </div>
              </Section>
              <Section>
                <div className="col-12 border-bottom mb-4">
                  <h2 className="text-center">Average Consumer Testimonials</h2>
                </div>
                <div className="col-12 offset-md-2 col-md-4">
                  <h4>Excellent Content ⭐⭐⭐⭐⭐</h4>
                  <p>
                    Matthew and the Crypto 101 do an outstanding job and bring
                    you high level information and present it in a manor non
                    computer professionals can understand. They have helped
                    educate me in my Crypto journey and I would recommend them
                    to everyone
                  </p>
                  <p>-GByyC-</p>
                </div>
                <div className="col-12 col-md-4">
                  <h4>Keep 'em Coming! ⭐⭐⭐⭐⭐</h4>
                  <p>
                    Getting into the crypto world can be overwhelming at first.
                    It's hard to decipher at first where to go for quality
                    information that isn't riddled with FUD. It wasn't until I
                    began listening to Crypto 101 that I felt confident with my
                    knowledge base. The podcast also has totally immersed me in
                    a user friendly kind of way that just makes sense. Since
                    then, I have gained a quality understanding of the entire
                    crypto environment. I'm particularly loving the rants and
                    interview, I now follow this podcast religiously and I'm
                    stoked for each new episode that comes out because not only
                    I learn something, I without a doubt cract up! Matthew is
                    hilarious! keep 'em coming!
                  </p>
                  <p>-CaitlinBea-</p>
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
              <div className="py-5 text-center">
                <BuyNowCard />
              </div>
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

const Video = () => {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/bcSeUyj4JL0"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      style={{ maxWidth: "100%" }}
    ></iframe>
  )
}

const ImageLink = () => {
  return (
    <>
      <a
        className="shadow d-inline-block"
        target="_blank"
        onClick={trackCoinConvert}
        href="https://www.amazon.com/gp/product/1725172607/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1725172607&linkCode=as2&tag=hodlstream-20&linkId=c399a45ec68749273e21db28af1f3707"
      >
        <img
          border="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1725172607&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=hodlstream-20"
        />
      </a>
      <img
        src="//ir-na.amazon-adsystem.com/e/ir?t=hodlstream-20&l=am2&o=1&a=1725172607"
        width="1"
        height="1"
        border="0"
        alt=""
        style={{ position: "absolute", border: "none !important", margin: "0px !important;" }}
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
        <BuyNow className="w-100" />
      </div>
    </div>
  )
}

const BuyNow = ({ className }) => {
  return (
    <>
      <a
        className={"btn btn-success btn-lg " + className}
        onClick={trackCoinConvert}
        target="_blank"
        href="https://www.amazon.com/gp/product/1725172607/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1725172607&linkCode=as2&tag=hodlstream-20&linkId=d65487bc722eaad19af0b6a303dde25e"
      >
        <i className="fas fa-shopping-cart"></i> BUY NOW!
      </a>
      <img
        src="//ir-na.amazon-adsystem.com/e/ir?t=hodlstream-20&l=am2&o=1&a=1725172607"
        width="1"
        height="1"
        border="0"
        alt=""
        style={{ position: "absolute", border: "none !important", margin: "0px !important;" }}
      />
    </>
  )
}

const TextLink = () => {
  return (
    <>
      <a
        className="text-dark"
        onClick={trackCoinConvert}
        target="_blank"
        href="https://www.amazon.com/gp/product/1725172607/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1725172607&linkCode=as2&tag=hodlstream-20&linkId=d65487bc722eaad19af0b6a303dde25e"
      >
        CRYPTO 101: Johnny's Guide to Cryptocurrency
      </a>
      <img
        src="//ir-na.amazon-adsystem.com/e/ir?t=hodlstream-20&l=am2&o=1&a=1725172607"
        width="1"
        height="1"
        border="0"
        alt=""
        style={{ position: "absolute", border: "none !important", margin: "0px !important;" }}
      />
    </>
  )
}

const Author = () => (
  <div>
    <h6>Written by</h6>
    <h4>Matthew Aaron</h4>
    <p>
      Matthew is an average guy born in Cleveland, Ohio. He also lived in
      Hawaii, China and Taiwan. While working in upper management in China and
      getting his MBA in Taiwan, Matthew became fluent in Chinese. Matthew’s
      passion is educating and empowering the average consumer through CRYPTO
      101 Media.
    </p>
  </div>
)

const Illustrator = () => (
  <div>
    <h6>Illustrated and Defined by</h6>
    <h4>Dani Amsalem</h4>
    <p>
      Dani likes Bitcoin but loves blockchain tech. After ignoring Bitcoin in
      2009, he dove headfirst into the subject in 2017 and has since experienced
      the exhilaration and gut-wrenching emotion that comes with prices and
      public opinion rising and falling. His costly and blind exploration led
      him to recognize that the primary obstacle to grasping blockchain, and the
      reason it hasn’t yet taken over the world is its confusing language.
      Dani’s passion is to make the entire subject understandable through
      Decryptionary.com.
    </p>
  </div>
)
