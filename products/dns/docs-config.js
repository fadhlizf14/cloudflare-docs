module.exports = {
    product: "DNS",
    pathPrefix: "/dns",
    productLogoPathD: require('./src/content/icons/dns').pathD,
    contentRepo: "cloudflare/cloudflare-docs",
    contentRepoFolder: "products/dns",
    externalLinks: [{
        title: "Cloudflare home",
        url: "https://www.cloudflare.com/"
    }],
    search: {
        indexName: "",
        apiKey: "",
        algoliaOptions: { 'facetFilters': ''}
    },
    siteMetadata: {
        title: "Cloudflare DNS docs",
        description: "Cloudflare DNS is the fastest, most resilient, and simplest managed DNS platform that can support customer's and partner's needs.",
        author: "@cloudflare",
        url: "https://developers.cloudflare.com/dns",
        image: "https://www.cloudflare.com/img/cf-twitter-card.png",
    },
  }